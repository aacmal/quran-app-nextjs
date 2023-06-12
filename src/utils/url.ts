export const getBasePath = () => 
`${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http' : 'https'}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;