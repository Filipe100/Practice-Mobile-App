/** 
 * The Caching module provides
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';


/**
 * @class
 * An item to add to the cache with a value and timestamp (for determining cache invalidation).
 */
class CacheItem {
    /**
     * 
     * @param {object} value The value to store in the cache.
     */
    constructor(value) {
        /** @public The value to store in the cache. */
        this.value = value;

        /** @public JS timestamp when the item was created. */
        this.timeStamp = Date.now();
    }
};


/**
 * @class
 * Handles local caching of data using AsyncStorage.
 */
class AsyncCache
{

    /** The prefix string to add to all cached items in AsyncStorage. */
    cachePrefix = 'cache-';
    
    /** The TTL (time to live) value in minutes for all cached items. */
    ttlMinutes = 5;


    /**
     * @private
     * Check if a cache item has expired (longer than TTL) and needs to be refreshed.
     * @param {CacheItem} item Cache item to check expiry for.
     * @returns {bool} True if item has expired (not updated for longer than TTL).
     */
    isExpired(item) {
        const now = moment(Date.now());
        const storedTime = moment(item.timeStamp);
        return now.diff(storedTime, 'minutes') > this.ttlMinutes;
    }


    /**
     * Store an item in the cache.
     * @param {string} key Key to reference cached item.
     * @param {object} value The value to cache.
     */
    async setItem(key, value) {
        const item = new CacheItem(value);
        
        try {
            // Set item in async storage
            await AsyncStorage.setItem(this.cachePrefix + key, JSON.stringify(item));
        } catch (err) {
            console.error(err);
        }
    }


    /**
     * Retrieve an item from the cache.
     * @param {string} key Key to reference cached item.
     */
    async getItem(key) {

        try {
            // Get item from async storage
            const value = await AsyncStorage.getItem(this.cachePrefix + key);
            const item = JSON.parse(value);

            // No item found, return null
            if (!item) return null;
            
            // Item expired, return null
            if (this.isExpired(item)) {
                await AsyncStorage.removeItem(this.cachePrefix + key);
                return null;
            }

            // Return item value
            return item.value;

        } catch (err) {
            console.error(err);
        }
    }


    /**
     * Remove an item from the cache.
     * @param {string} key Key to reference cached item.
     */
    async removeItem(key) {
        try {
            
            // Remove item
            await AsyncStorage.removeItem(this.cachePrefix + key);

        } catch (err) {
            console.error(err);
        }
    }


    /**
     * Removes all items from the cache.
     */
    async removeAllItems() {
        try {

            // Get all items from async storage
            const allKeys = await AsyncStorage.getAllKeys();

            // Filter to only include cache items
            const cacheKeys = allKeys.filter(k => k.startsWith(this.cachePrefix))
            
            // Remove all cache items
            if (cacheKeys) {
                await AsyncStorage.multiRemove(cacheKeys);
            }

        } catch (err) {
            console.error(err);
        }
    }
}

export default new AsyncCache();