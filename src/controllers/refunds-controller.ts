import { Request,Response } from "express"
import { AppError } from "@/utils/AppError.js"
import { authConfig } from "@/configs/auth.js"
import { prisma } from "@/database/prisma.js"
import jwt from "jsonwebtoken"
import { compare } from "bcrypt"
import {z} from "zod"

class RefundsController{
  async create(request:Request,response:Response){
    response.json({message:"ok"})
  }
}

export {RefundsController}