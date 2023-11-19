import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        path: '/',
        screens: {
          Home: 'home',
          People: {
            path: 'people',
            screens: {
              ViewPeople: 'view-all',
              ViewPerson: 'view',
              EditPerson: 'edit',
            },
          },
          AddPerson: 'people/add',
          Help: 'help',
        },
      },
      NotFound: '*', // catch-all route (404 resource not found)
    },
  },
};

// PATH:    /people/view-all
// PATH:    /people/view
// PATH:    /people/edit
// PATH:    /people/add
