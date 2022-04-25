import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private user: Model<UserDocument>) {}

  async create(createUser: CreateUserDto): Promise<any> {
    try {
      const euser = await this.user
        .findOne()
        .where('email')
        .equals(createUser.email)
        .exec();
      if (euser) throw new ConflictException('User with same email exists');
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(createUser.password, salt);
      const user = new this.user({ ...createUser, password: hash });
      await user.save();
      const { password, ...rest } = user.toJSON();
      return rest;
    } catch (e) {
      throw e;
      // throw new HttpException(`Error: ${e}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<UserDocument> {
    try {
      const user = await this.user.findById(id).exec();
      if (!user) throw new NotFoundException();
      return user;
    } catch (e) {
      throw e;
    }
  }

  async findOneByEmail(email: string): Promise<UserDocument> {
    try {
      const user = await this.user
        .findOne()
        .where('email')
        .equals(email)
        .exec();
      if (!user) throw new NotFoundException();
      return user;
    } catch (e) {
      throw e;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
