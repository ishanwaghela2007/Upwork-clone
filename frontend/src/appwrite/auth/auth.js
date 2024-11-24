import Conf from "../../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  constructor() {
    this.Client = new Client();
    this.Client.setEndpoint(Conf.appwriteURL).setProject(Conf.appwriteProjectID);
    this.Account = new Account(this.Client);
  }

  async signup({ firstname, lastname, email, password, confirmpassword }) {
    try {
      if (password !== confirmpassword) {
        throw new Error("Passwords do not match");
      }
      const userAccount = await this.Account.create(
        ID.unique(),
        email,
        password,
        `${firstname} ${lastname}`
      );
      if (userAccount) {
        return this.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      throw new Error(`Signup unsuccessful: ${error.message}`);
    }
  }

  async login({ email, password }) {
    try {
      return await this.Account.createEmailSession(email, password);
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

  async verification() {
    try {
      const promise = await this.Account.createVerification(
        `${window.location.origin}/verify-email`
      );
      return promise;
    } catch (error) {
      console.error("Appwrite service error:", error);
      throw new Error(`Appwrite verification failed: ${error.message}`);
    }
  }
}

const authServices = new AuthServices();
export default authServices;
