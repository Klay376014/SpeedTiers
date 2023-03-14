import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import pm from "../pokedex_speedtier.json";

export const usePokemonStore = defineStore("pokemon", () => {
  const list = ref(pm);

  let newList = Object.entries(list.value).sort(
    (a, b) => b[1].baseStats.spe - a[1].baseStats.spe
  );

  return {
    list,
    newList,
  };
});
