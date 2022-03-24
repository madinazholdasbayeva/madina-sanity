export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '623cb2ba3fdf0217b2d45404',
                  title: 'Sanity Studio',
                  name: 'madina-sanity-studio',
                  apiId: 'd949f04a-316d-49e2-951f-9d291c7ec526'
                },
                {
                  buildHookId: '623cb2bab02ed01af4d731f8',
                  title: 'Landing pages Website',
                  name: 'madina-sanity',
                  apiId: '240e4c1a-3646-487f-9937-f248b35aa179'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/madinazholdasbayeva/madina-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://madina-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
