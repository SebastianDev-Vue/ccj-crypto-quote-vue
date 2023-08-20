export interface Cryptos {
  Message: string
  Type: number
  MetaData: MetaData
  SponsoredData: any[]
  Data: Datum[]
  RateLimit: RateLimit
  HasWarning: boolean
}

export interface Datum {
  CoinInfo: CoinInfo
  RAW: Raw
  DISPLAY: Display
}

export interface CoinInfo {
  Id: string
  Name: string
  FullName: string
  Internal: string
  ImageUrl: string
  Url: string
  Algorithm: string
  ProofType: string
  Rating: Rating
  NetHashesPerSecond: number
  BlockNumber: number
  BlockTime: number
  BlockReward: number
  AssetLaunchDate: string
  MaxSupply: number
  Type: number
  DocumentType: DocumentType
}

export enum DocumentType {
  Webpagecoinp = 'Webpagecoinp'
}

export interface Rating {
  Weiss: Weiss
}

export interface Weiss {
  Rating: string
  TechnologyAdoptionRating: string
  MarketPerformanceRating: string
}

export interface Display {
  USD: { [key: string]: string }
}

export interface Raw {
  USD: CryptoData
}

export interface CryptoData {
  CHANGE24HOUR: number
  CHANGEDAY: number
  CHANGEHOUR: number
  CHANGEPCT24HOUR: number
  CHANGEPCTDAY: number
  CHANGEPCTHOUR: number
  CIRCULATINGSUPPLY: number
  CIRCULATINGSUPPLYMKTCAP: number
  CONVERSIONLASTUPDATE: number
  CONVERSIONSYMBOL: Conversionsymbol
  CONVERSIONTYPE: Conversiontype
  FLAGS: string
  FROMSYMBOL: string
  HIGH24HOUR: number
  HIGHDAY: number
  HIGHHOUR: number
  IMAGEURL: string
  LASTMARKET: string
  LASTTRADEID: string
  LASTUPDATE: number
  LASTVOLUME: number
  LASTVOLUMETO: number
  LOW24HOUR: number
  LOWDAY: number
  LOWHOUR: number
  MARKET: Market
  MEDIAN: number
  MKTCAP: number
  MKTCAPPENALTY: number
  OPEN24HOUR: number
  OPENDAY: number
  OPENHOUR: number
  PRICE: number
  SUPPLY: number
  TOPTIERVOLUME24HOUR: number
  TOPTIERVOLUME24HOURTO: number
  TOSYMBOL: Tosymbol
  TOTALTOPTIERVOLUME24H: number
  TOTALTOPTIERVOLUME24HTO: number
  TOTALVOLUME24H: number
  TOTALVOLUME24HTO: number
  TYPE: string
  VOLUME24HOUR: number
  VOLUME24HOURTO: number
  VOLUMEDAY: number
  VOLUMEDAYTO: number
  VOLUMEHOUR: number
  VOLUMEHOURTO: number
}

export enum Conversionsymbol {
  Empty = '',
  Eth = 'ETH'
}

export enum Conversiontype {
  Direct = 'direct',
  Multiply = 'multiply'
}

export enum Market {
  Cccagg = 'CCCAGG'
}

export enum Tosymbol {
  Usd = 'USD'
}

export interface MetaData {
  Count: number
}

export interface RateLimit {}
