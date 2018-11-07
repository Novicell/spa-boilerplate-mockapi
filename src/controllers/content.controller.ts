
import { Request, Response } from 'express';
import { ContentMetaModel } from '../models/ContentMetaModel';

export default function (req: Request, res: Response): void {
  const key = req.query.key;

  // If no key is provided, dont return any data
  if (!key) {
    res.status(500).json({
      message: 'A key must be provided'
    });
    return;
  }

  const data: ContentMetaModel = {
    viewModel: {
      globals: {
        header: {
          logo: {
            url: 'https://www.novicell.dk/dist/images/novicell-logo-white-web.svg'
          },
          navigation: [{
            title: 'Menu 1',
            path: '/menu-1/'
          }, {
            title: 'Menu 2',
            path: '/menu-2/'
          }],
        },
        footer: {
          navigation: [{
            title: 'Footer 1',
            path: '/footer-1/'
          }, {
            title: 'Footer 2',
            path: '/footer-2/'
          }]
        }
      }, 
      content: {
        name: 'Test',
      },
      meta: {
        template: 'HomePage',
        nodeId: 1337,
      },
      seo: {
        title: 'Test-site',
        keywords: 'boilerplate, test'
      }
    }
  }
  
  res.status(200).json(data);
}