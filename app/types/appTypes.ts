export type InputTypes = {
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
