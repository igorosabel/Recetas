export interface DialogField {
  title: string;
  type: string;
  value: string;
  hint?: string;
}

export interface DialogOptions {
  title: string;
  content: string;
  fields?: DialogField[];
  ok: string;
  cancel?: string;
}

export interface DataShareObject {
  key: string;
  type: string;
  value: any;
  date: number;
}

export interface LoginData {
  email: string;
  pass: string;
}

export interface LoginResult {
  status: string;
  user: UserInterface;
}

export interface RegisterData {
  name: string;
  email: string;
  pass: string;
  conf: string;
}

export interface MainResult {
  status: string;
  dayRecipes: DayRecipeInterface[];
  recipes: RecipeInterface[];
  shoppingLists: ShoppingListInterface[];
}

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  token: string;
}

export interface DayRecipeInterface {
  weekDay: number;
  meal: MealInterface;
  recipe: RecipeInterface;
}

export interface MealInterface {
  id: number;
  name: string;
  enabled: boolean;
  startTime: string;
  endTime: string;
}

export interface RecipeInterface {
  id: number;
  name: string;
  time: number;
  ingredients: RecipeIngredientInterface[];
  instructions: InstructionInterface[];
}

export interface RecipeIngredientInterface {
  ingredient: IngredientInterface;
  order: number;
  amount: string;
}

export interface IngredientInterface {
  id: number;
  name: string;
}

export interface InstructionInterface {
  id: number;
  order: number;
  type: number;
  instruction: string;
}

export interface ShoppingListInterface {
  id: number;
  name: string;
  list: ShoppingListIngredientInterface[];
}

export interface ShoppingListIngredientInterface {
  ingredient: IngredientInterface;
  order: number;
  amount: number;
}

export interface ModalPosition {
  top: number;
  left: number;
}
