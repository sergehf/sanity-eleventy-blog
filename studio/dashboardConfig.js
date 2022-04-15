export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6259a8afcd52d506fd90af40',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6r4o6vti',
                  apiId: 'b7df7e84-c617-49e8-807d-afe3a17b1208'
                },
                {
                  buildHookId: '6259a8afcd52d506b790b13d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-jhbk54vu',
                  apiId: '5b4d5397-07fa-4433-b2d4-60d362debbd6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sergehf/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-jhbk54vu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
