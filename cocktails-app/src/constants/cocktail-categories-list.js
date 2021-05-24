// eslint-disable-next-line
import CocktailCategory from './../models/cocktail-category';
import Cocktail from './../models/cocktail';
const COCKTAIL_CATEGORIES = [
    new CocktailCategory('Alcoholic', [
        new Cocktail('Alcoholic cocktail 1', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ssxvww1472669166.jpg", '0'),
        new Cocktail('Alcoholic cocktail 2', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xtuyqv1472669026.jpg",'1'),
        new Cocktail('Alcoholic cocktail 3', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xtuyqv1472669026.jpg",'2')
    ]),
    new CocktailCategory('Non Alcoholic', [
        new Cocktail('Non Alcoholic cocktail 1', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vyrvxt1461919380.jpg",'3'),
        new Cocktail('Non Alcoholic cocktail 2', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vyrvxt1461919380.jpg",'4'),
        new Cocktail('Non Alcoholic cocktail 3', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vyrvxt1461919380.jpg",'5')
    ]),
    new CocktailCategory('Ordinary Drink', [
        new Cocktail('Ordinary Drink 1', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/mr30ob1582479875.jpg",'6'),
        new Cocktail('Ordinary Drink 2', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/mr30ob1582479875.jpg",'7'),
        new Cocktail('Ordinary Drink 3', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/mr30ob1582479875.jpg",'8')
    ]),
    new CocktailCategory('Cocktail glass', [
        new Cocktail('Cocktail glass 1', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/smb2oe1582479072.jpg",'9'),
        new Cocktail('Cocktail glass 2', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/smb2oe1582479072.jpg",'10'),
        new Cocktail('Cocktail glass 3', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/smb2oe1582479072.jpg",'11')
    ]),
    new CocktailCategory('Champagne flute', [
        new Cocktail('Champagne flute 1', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/il9e0r1582478841.jpg",'12'),
        new Cocktail('Champagne flute 2', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/il9e0r1582478841.jpg",'13'),
        new Cocktail('Champagne flute 3', "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/il9e0r1582478841.jpg",'14')
    ])];

export default COCKTAIL_CATEGORIES;