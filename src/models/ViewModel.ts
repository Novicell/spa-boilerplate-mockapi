import { MetaModel } from "./view-models/MetaModel";
import { ContentModel } from "./view-models/ContentModel";

export interface ViewModel {
  seo: MetaModel,
  content: ContentModel,
}