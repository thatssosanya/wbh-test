export type Advert = {
  article: number
  url: string
  image: string
  image_big: string
  advert_id: number
  cpm: number
  position: number
  position_on_page: number
  page: number
  subject: {
    id: number
    name: string
  }
  delivery_time: number
}

export type SubjectPriority = {
  id: number
  name: string
  position: number
}

export type AdvertsResponse = {
  bets: Advert[]
  subject_priorities: SubjectPriority[]
}

export type Catalog = {
  id: number
  name: string
}

export type CatalogResponse = Catalog[]

export type Region = {
  id: number
  name: string
}

export type RegionResponse = Region[]
