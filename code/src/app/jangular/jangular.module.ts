import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UsersModule} from './users/users.module';
import { ContentModule } from './content/content.module';

export { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    ContentModule
  ],
  declarations: [],
  exports : [UsersModule, ContentModule]
})
export class JangularModule { }
