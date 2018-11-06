
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
      content: {
        name: 'Test',
      },
      seo: {
        title: 'Test-site',
        keywords: 'boilerplate, test'
      }
    }
  }
  
  res.status(200).json(data);
}