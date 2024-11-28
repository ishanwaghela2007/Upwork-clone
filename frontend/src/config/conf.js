const Conf = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteapisecret:String(import.meta.env.VITE_APPWRITE_APIKEY_SECRET), // Convert to string explicitly
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
};

export default Conf;
