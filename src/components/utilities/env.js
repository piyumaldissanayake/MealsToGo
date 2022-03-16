const localHost = 'http://localhost:5001/mealstogo-cbd5b/us-central1';
const liveHost = 'https://us-central1-mealstogo-cbd5b.cloudfunctions.net/us-central1';

export const isDevelopment = process.env.NODE_ENV === 'development';

// this variable controls if the used data is mock or not
export const isMock = true;

export const host = isDevelopment ? localHost : liveHost;