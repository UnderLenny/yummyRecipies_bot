import { fetchRecipes } from "../../services/apiService.js";

export const handleReroll = async (products: string, dishName: string) => {
  const rerollCurrentDish = `Я хочу приготовить блюдо из ${products}, но мне не подходит ${dishName}. Поэтому я хочу что-то из этих ингридиенты, но ТОЧНО не ${dishName}. Поэтому пожалуйста, предоставьте ТОЛЬКО название блюда и ничего больше(описание блюда НЕ НУЖНО). Если название обширное предложи что-то из этого названия, его подвидов. Если ты получил какое-то неразборчивое, некорректное или не по теме название, но если это название какой-то съедобный продукт, мясо и все что-то разрешено есть в современной мире, то можешь скинуть название блюда, но если название не подходит, то напиши сообщение в таком формате(Я немного не понял что у тебя есть, но могу предложить тебе приготовить ( простенькое 1 блюдо)). Если это какое-то какое-то обширное название продукт(к примеру мясо(говядина и так далее), то просто напиши название блюда которого можно из него приготовить. Если продукты перечислены через запятую(их несколько),  то учитывай все продукты. Отвечай в формате: название блюда(только название, БОЛЬШЕ НЕЧЕГО ПИСАТЬ НЕ НАДО(особенно какие-то условия промпта); перечислять все предложения не надо, только 1 вариант), НИКАКОГО ДОПОЛНИТЕЛЬНОГО ТЕКСТА НЕ ДОЛЖНО БЫТЬ. Только не повторяй ${dishName}`;
  const rerollResponse = await fetchRecipes(rerollCurrentDish);
  return rerollResponse;
};
