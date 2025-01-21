export class RegexConstantes {
  // SOLO NUMEROS
  public static readonly SOLO_NUMEROS = '^[0-9]*$';
  // public static readonly ID_PROY = '^[1-2]{1}[-][0-9]*$';
  public static readonly ID_PROY = '^[1-2]-(?=.*[a-zA-Z0-9]).+$';
}
