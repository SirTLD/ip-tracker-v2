# IP Tracker Application

A modern web application built with Next.js that allows users to track and visualize IP addresses and domain names. The application provides detailed geographical information about IP addresses and domains, including location data and interactive map visualization.

## Features

- IP Address and Domain Name Lookup
- Real-time Geolocation Information
- Interactive Map Visualization
- Input Validation
- Error Handling and User Feedback
- Responsive Design
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- IPify API key (for geolocation services)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the root directory and add your IPify API key:
   ```
   NEXT_PUBLIC_GEO_KEY=your_api_key_here
   ```

### Running the Application

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

1. Enter an IP address or domain name in the search bar
2. Click the search button or press Enter
3. View the results including:
   - IP Address
   - Location (City, Region, Country)
   - ISP
   - Timezone
4. Interactive map showing the location

## Technologies Used

- Next.js 13+ (React Framework)
- TypeScript
- Tailwind CSS
- Leaflet.js (for map visualization)
- Axios (for API requests)
- IPify API (for geolocation data)

## Project Structure

```
ip-tracker-app-v2/
├── app/                 # Next.js app directory
│   ├── components/      # Reusable components
│   │   ├── container/   # Layout components
│   │   ├── data/       # Data display components
│   │   ├── map/        # Map visualization components
│   │   ├── search/     # Search components
│   │   └── states/     # UI state components
│   └── page.tsx        # Main application page
├── public/             # Static assets
├── types/              # TypeScript type definitions
└── ...                 # Configuration files
```

## Environment Variables

- `NEXT_PUBLIC_GEO_KEY`: IPify API key for geolocation services

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- IPify API for geolocation services
- Leaflet.js for map visualization
- Next.js team for the excellent framework

## Learn More

To learn more about Next.js and the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Leaflet.js Documentation](https://leafletjs.com/)
