import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { FavoritesController } from './favorites/favorites.controller';
import { PokemonService } from './pokemon/pokemon.service';
import { FavoritesService } from './favorites/favorites.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PokemonController, FavoritesController],
  providers: [AppService, PokemonService, FavoritesService],
})
export class AppModule {}
