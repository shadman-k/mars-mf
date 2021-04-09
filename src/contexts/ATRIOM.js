export default [
  {
    dependencies: [
      { name: 'bootstrap', version: '4.5' },
      { name: 'react', version: '16.13' },
      { name: 'react-bootstrap', version: '1.3' },
      { name: 'react-bootstrap-icons', version: '1.0' },
      { name: 'react-dom', version: '16.13' },
      { name: 'react-query', version: '1.5' },
      { name: 'react-redux', version: '7.2' },
      { name: 'react-router-dom', version: '5.2' },
      { name: 'redux', version: '4.0' },
      { name: 'redux-thunk', version: '2.3' },
    ],
    devDependencies: [
      { name: '@babel/core', version: '7.13' },
      { name: '@babel/preset-react', version: '7.9' },
      { name: '@module-federation/dashboard-plugin', version: '1.1' },
      { name: 'babel-loader', version: '8.1' },
      { name: 'css-loader', version: '3.6' },
      { name: 'html-webpack-plugin', version: '4.5' },
      { name: 'style-loader', version: '1.2' },
      { name: 'webpack', version: '5.28' },
      { name: 'webpack-cli', version: '3.3' },
      { name: 'webpack-dev-server', version: '3.11' },
    ],
    optionalDependencies: [],
    id: 'checkout',
    name: 'checkout',
    remote: 'http://localhost:8081/remoteEntry.js',
    overrides: [
      {
        id: 'react',
        name: 'react',
        version: '16.13',
        location: 'react',
        applicationID: 'checkout',
      },
      {
        id: 'react-dom',
        name: 'react-dom',
        version: '16.13',
        location: 'react-dom',
        applicationID: 'checkout',
      },
      {
        id: 'react-redux',
        name: 'react-redux',
        version: '7.2',
        location: 'react-redux',
        applicationID: 'checkout',
      },
      {
        id: 'redux',
        name: 'redux',
        version: '4.0',
        location: 'redux',
        applicationID: 'checkout',
      },
      {
        id: 'redux-thunk',
        name: 'redux-thunk',
        version: '2.3',
        location: 'redux-thunk',
        applicationID: 'checkout',
      },
      {
        id: 'react-bootstrap',
        name: 'react-bootstrap',
        version: '1.3',
        location: 'react-bootstrap',
        applicationID: 'checkout',
      },
    ],
    consumes: [
      {
        consumingApplicationID: 'checkout',
        applicationID: 'home',
        name: 'Frame',
        usedIn: [
          {
            file: 'src/CheckoutPage.jsx',
            url: 'http://github.com/src/CheckoutPage.jsx',
          },
        ],
      },
      {
        consumingApplicationID: 'checkout',
        applicationID: 'search',
        name: 'products',
        usedIn: [
          {
            file: 'src/CheckoutContent.jsx',
            url: 'http://github.com/src/CheckoutContent.jsx',
          },
        ],
      },
    ],
    modules: [
      {
        id: 'checkout:Checkout',
        name: 'Checkout',
        applicationID: 'checkout',
        requires: [],
        file: './src/CheckoutContent',
      },
      {
        id: 'checkout:AddToCart',
        name: 'AddToCart',
        applicationID: 'checkout',
        requires: [],
        file: './src/AddToCart',
      },
      {
        id: 'checkout:checkout',
        name: 'checkout',
        applicationID: 'checkout',
        requires: [],
        file: './src/checkout',
      },
      {
        id: 'checkout:store',
        name: 'store',
        applicationID: 'checkout',
        requires: ['redux', 'redux-thunk'],
        file: './src/store',
      },
    ],
  },
  {
    dependencies: [
      { name: 'bootstrap', version: '4.5' },
      { name: 'react', version: '16.13' },
      { name: 'react-bootstrap', version: '1.3' },
      { name: 'react-bootstrap-icons', version: '1.0' },
      { name: 'react-dom', version: '16.13' },
      { name: 'react-query', version: '1.5' },
      { name: 'react-redux', version: '7.2' },
      { name: 'react-router-dom', version: '5.2' },
      { name: 'redux', version: '4.0' },
    ],
    devDependencies: [
      { name: '@babel/core', version: '7.13' },
      { name: '@babel/preset-react', version: '7.9' },
      { name: '@module-federation/dashboard-plugin', version: '1.1' },
      { name: 'babel-loader', version: '8.1' },
      { name: 'css-loader', version: '3.6' },
      { name: 'cypress', version: '4.12' },
      { name: 'html-webpack-plugin', version: '4.5' },
      { name: 'style-loader', version: '1.2' },
      { name: 'webpack', version: '5.28' },
      { name: 'webpack-cli', version: '3.3' },
      { name: 'webpack-dev-server', version: '3.11' },
    ],
    optionalDependencies: [],
    id: 'home',
    name: 'home',
    remote: 'http://localhost:8080/remoteEntry.js',
    overrides: [
      {
        id: 'react',
        name: 'react',
        version: '16.13',
        location: 'react',
        applicationID: 'home',
      },
      {
        id: 'react-dom',
        name: 'react-dom',
        version: '16.13',
        location: 'react-dom',
        applicationID: 'home',
      },
      {
        id: 'react-redux',
        name: 'react-redux',
        version: '7.2',
        location: 'react-redux',
        applicationID: 'home',
      },
      {
        id: 'react-bootstrap',
        name: 'react-bootstrap',
        version: '1.3',
        location: 'react-bootstrap',
        applicationID: 'home',
      },
      {
        id: 'react-bootstrap-icons',
        name: 'react-bootstrap-icons',
        version: '1.0',
        location: 'react-bootstrap-icons',
        applicationID: 'home',
      },
      {
        id: 'react-router-dom',
        name: 'react-router-dom',
        version: '5.2',
        location: 'react-router-dom',
        applicationID: 'home',
      },
      {
        id: 'react-query',
        name: 'react-query',
        version: '1.5',
        location: 'react-query',
        applicationID: 'home',
      },
      {
        id: 'redux',
        name: 'redux',
        version: '4.0',
        location: 'redux',
        applicationID: 'home',
      },
    ],
    consumes: [
      {
        consumingApplicationID: 'home',
        applicationID: 'checkout',
        name: 'store',
        usedIn: [
          {
            file: 'src/HomePage.jsx',
            url: 'http://github.com/src/HomePage.jsx',
          },
        ],
      },
      {
        consumingApplicationID: 'home',
        applicationID: 'search',
        name: 'products',
        usedIn: [
          {
            file: 'src/HomeContent.jsx',
            url: 'http://github.com/src/HomeContent.jsx',
          },
        ],
      },
      {
        consumingApplicationID: 'home',
        applicationID: 'home',
        name: 'Home',
        usedIn: [
          { file: 'src/Frame.jsx', url: 'http://github.com/src/Frame.jsx' },
        ],
      },
      {
        consumingApplicationID: 'home',
        applicationID: 'search',
        name: 'Search',
        usedIn: [
          { file: 'src/Frame.jsx', url: 'http://github.com/src/Frame.jsx' },
        ],
      },
      {
        consumingApplicationID: 'home',
        applicationID: 'checkout',
        name: 'Checkout',
        usedIn: [
          { file: 'src/Frame.jsx', url: 'http://github.com/src/Frame.jsx' },
        ],
      },
      {
        consumingApplicationID: 'home',
        applicationID: 'checkout',
        name: 'AddToCart',
        usedIn: [
          {
            file: 'src/HomeContent.jsx',
            url: 'http://github.com/src/HomeContent.jsx',
          },
        ],
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "search",
        "name": "dummy1",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "home",
        "name": "dummy2",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "home",
        "name": "dummy3",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "home",
        "name": "dummy4",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "checkout",
        "name": "dummy5",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "checkout",
        "name": "dummy6",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "search",
        "name": "dummy7",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "search",
        "name": "dummy8",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "search",
        "name": "dummy9",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      },
      {
        "consumingApplicationID": "home",
        "applicationID": "checkout",
        "name": "dummy10",
        "usedIn": [
          {
            "file": "src/HomeContent.jsx",
            "url": "http://github.com/src/HomeContent.jsx"
          }
        ]
      }
    ],
    modules: [
      {
        id: 'home:Home',
        name: 'Home',
        applicationID: 'home',
        requires: [],
        file: './src/HomeContent',
      },
      {
        id: 'home:Frame',
        name: 'Frame',
        applicationID: 'home',
        requires: [],
        file: './src/Frame',
      },
    ],
  },
  {
    dependencies: [
      { name: 'bootstrap', version: '4.5' },
      { name: 'react', version: '16.13' },
      { name: 'react-bootstrap', version: '1.3' },
      { name: 'react-bootstrap-icons', version: '1.0' },
      { name: 'react-dom', version: '16.13' },
      { name: 'react-query', version: '1.5' },
      { name: 'react-redux', version: '7.2' },
      { name: 'react-router-dom', version: '5.2' },
      { name: 'redux', version: '4.0' },
    ],
    devDependencies: [
      { name: '@babel/core', version: '7.13' },
      { name: '@babel/preset-react', version: '7.9' },
      { name: '@module-federation/dashboard-plugin', version: '1.1' },
      { name: 'babel-loader', version: '8.1' },
      { name: 'css-loader', version: '3.6' },
      { name: 'html-webpack-plugin', version: '4.5' },
      { name: 'style-loader', version: '1.2' },
      { name: 'webpack', version: '5.28' },
      { name: 'webpack-cli', version: '3.3' },
      { name: 'webpack-dev-server', version: '3.11' },
    ],
    optionalDependencies: [],
    id: 'search',
    name: 'search',
    remote: 'http://localhost:8082/remoteEntry.js',
    overrides: [
      {
        id: 'react',
        name: 'react',
        version: '16.13',
        location: 'react',
        applicationID: 'search',
      },
      {
        id: 'react-dom',
        name: 'react-dom',
        version: '16.13',
        location: 'react-dom',
        applicationID: 'search',
      },
      {
        id: 'react-redux',
        name: 'react-redux',
        version: '7.2',
        location: 'react-redux',
        applicationID: 'search',
      },
      {
        id: 'react-bootstrap',
        name: 'react-bootstrap',
        version: '1.3',
        location: 'react-bootstrap',
        applicationID: 'search',
      },
      {
        id: 'react-query',
        name: 'react-query',
        version: '1.5',
        location: 'react-query',
        applicationID: 'search',
      },
      {
        id: 'redux',
        name: 'redux',
        version: '4.0',
        location: 'redux',
        applicationID: 'search',
      },
    ],
    consumes: [
      {
        consumingApplicationID: 'search',
        applicationID: 'home',
        name: 'Frame',
        usedIn: [
          {
            file: 'src/SearchPage.jsx',
            url: 'http://github.com/src/SearchPage.jsx',
          },
        ],
      },
      {
        consumingApplicationID: 'search',
        applicationID: 'checkout',
        name: 'store',
        usedIn: [
          {
            file: 'src/SearchPage.jsx',
            url: 'http://github.com/src/SearchPage.jsx',
          },
        ],
      },
      {
        consumingApplicationID: 'search',
        applicationID: 'checkout',
        name: 'AddToCart',
        usedIn: [
          {
            file: 'src/SearchContent.jsx',
            url: 'http://github.com/src/SearchContent.jsx',
          },
        ],
      },
    ],
    modules: [
      {
        id: 'search:Search',
        name: 'Search',
        applicationID: 'search',
        requires: [],
        file: './src/SearchContent',
      },
      {
        id: 'search:products',
        name: 'products',
        applicationID: 'search',
        requires: [],
        file: './src/products',
      },
    ],
  },
];
