export type InputTypes = {
  //   handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export type DataEntryTypes = {
  title: string
  data?: DataTypes
}

export type DataTypes = {
  ip: string
  location: {
    city: string
    country: string
    postalCode: string
    region: string
    timezone: string
    lat?: number
    lng?: number
  }
  isp: string
}

// "ip": "151.101.67.5",
// "location": {
//   "country": "US",
//   "region": "California",
//   "city": "San Francisco",
//   "lat": 37.77493,
//   "lng": -122.41942,
//   "postalCode": "94102",
//   "timezone": "-07:00",
//   "geonameId": 5391959
// },
// "domains": [
//   "cnn.biz.vn",
//   "cnn.bs",
//   "cnn.az",
//   "cnnpolitics.com",
//   "cnn.ag"
// ],
// "as": {
//   "asn": 54113,
//   "name": "FASTLY",
//   "route": "151.101.64.0/22",
//   "domain": "https://www.fastly.com",
//   "type": "Content"
// },
// "isp": "Fastly, Inc.",
// "proxy": {
//   "proxy": false,
//   "vpn": false,
//   "tor": false
// }
// }
