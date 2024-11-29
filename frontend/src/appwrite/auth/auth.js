import Conf from "../../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  constructor() {
    this.Client = new Client();
    this.Client.setEndpoint(Conf.appwriteURL).setProject(Conf.appwriteProjectID);
    this.Account = new Account(this.Client);
  }

 
  async signup(formdata) {
    const {firstName,lastName,email,password} = formdata;
    try {
      const userAccount = await this.Account.create(
        ID.unique(),
        email,
        password,
        `${firstName} ${lastName}`
      );
      //account verfication 
      await this.Account.createVerification();
      console.log("Account Created :- ",userAccount)
      return{ 
        status: "success",
        message: "Account created! Please check your email to verify your account.",
        userAccount, 
      };
    } catch (error) {
      throw new Error(`Signup unsuccessful: ${error.message}`);
    }
  }

  async login(formdata) {
    const {email,password}=formdata;
    try {
      return await this.Account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(`Login unsuccessful: ${error.message}`);
    }
  }

  async getCurrentUser() {
    try {
      return await this.Account.get();
    } catch (error) {
      throw new Error(`Account not found: ${error.message}`);
    }
  }
  async logout() {
    try {
      await this.Account.deleteSession("current");
    } catch (error) {
      throw new Error(`Logout unsuccessful: ${error.message}`);
    }
  }
}

const authServices = new AuthServices();
export default authServices;
