import { MetaModel } from "./view-models/MetaModel";
import { ContentModel } from "./view-models/ContentModel";
import { GlobalModel } from "./view-models/GlobalModel";

export interface ViewModel {
  seo: MetaModel,
  content: ContentModel,
  globals: GlobalModel
}