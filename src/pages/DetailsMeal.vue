<template>
  <div class="container">
    <section class="meal-section">
      <div class="meal-card">
        <div class="meal-card-image">
          <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x500.png" alt="">
        </div>
        <div class="meal-card-info">
          <span> Total Calories: {{ (meal.calories / 1000).toFixed(2) }} kcal</span>
          <span> Carbs: {{ (meal.totalNutrients.CHOCDF.quantity).toFixed(2) }}</span>
          <span> Fat: {{ (meal.totalNutrients.FAT.quantity).toFixed(2) }}</span>
          <span> Proteins: {{ (meal.totalNutrients.PROCNT.quantity).toFixed(2) }}</span>
        </div>
      </div>
      <div class="meal-info">
        <h2>{{ meal.label }}</h2>
        <h3> Ingredients list</h3>
        <p v-for="ingredient in meal.ingredientLines"> {{ ingredient }}</p>
        <h3> How to make it</h3>
        <p> Process</p>
      </div>
    </section>
    <section class="related">
      <h3> You might also like </h3>
      <div class="recipe-card"> </div>
    </section>
  </div>


  <!-- <div>IMAGEN: {{ meal.images.REGULAR.url }}</div>
  <div>KILOCALORIAS: {{ (meal.calories / 1000).toFixed(2) }}</div>
  <div>CARBS: {{ (meal.totalNutrients.CHOCDF.quantity).toFixed(2) }}</div>
  <div>FAT: {{ (meal.totalNutrients.FAT.quantity).toFixed(2) }}</div>
  <div>PROTEIN: {{ (meal.totalNutrients.PROCNT.quantity).toFixed(2) }}</div>

  <div>TITULO RECETA: {{ meal.label }}</div>
  <div>INGREDIENTES: {{ meal.ingredientLines }}</div> -->
</template>

<script>

export default {
  name: "DetailsMeal",
  data() {
    return {
      meal: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_2b088b11332df9e1009f185109029dbe",
        label: "Coffe Mousse Recipe",
        image:
          "https://edamam-product-images.s3.amazonaws.com/web-img/a1d/a1defc00162e8000b02866247fc03616.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCxc%2FT1eNngBeUNdNS0VB0PkM2GIivnurOHARcGOhlzIwIhAKm%2BQUoFiojlcTD15izu4%2F4svMH0DUSZS3hXB3Aq1QEtKrkFCBIQABoMMTg3MDE3MTUwOTg2IgxiPKNY9bo4OMq7QZwqlgWh1NUADt0yY5fIGH%2FZLpmxQ5Zc9Pg8hLUQPH7PopfyiR7ysyWOQtCKvMnUE6VadpBOzpTg16s%2B8NDdhTp%2FTQ3oTmu5IKfTf4L0BdNUMtabL6xe%2FaUE8oJN8F0Kd3jmcDPMuiZLGWkUmXj4YroNYkZlL6S1ADXDkkUXYxR1d4%2F4UTMekVmZJseBAMLsh8sFY5cfjTSBsiujFMpEoPGe5nDxNF2hvzE6ISF11IGNgGkNJdyIGzTRDgUzSR55yNDPLe5XzRV8N%2FmpW3RpyFs9vS0SSygQgH%2F57%2F9gMRcM0GLnr5go2tTA9M92eU6rNppEkSrXQyG4%2FbJZ0uowiQ4klzyBr6abebHHV8i8EAgtDW5Ju3JESQEvSJalfXBMtz7Nlgqwitl1Ikbh8B87P8ahypCvYh4ZALyRu5KDRAFYwlRKTkvKz7RKFp9jzalGVEHJsbJwCLJqIsl9RImeXdqrfWunNcuGRJkQS0GydiwGy7pCCYIUZpicL5MPen1zCfjKPqoG3dSr6pmSG1uBJA2mZeLiSZlXfk8tHJk1voFspXhVRY%2FlcEcU3%2Fl3UQtGXT6SOpb8MUUgdCypxQKtnpMJa1tGBTaJSW2lZa0M96j79ehXAf7FUd9aXoSK265ovqz%2Ft6MkEBiGzbG9e3oQ%2FzcoHbEtUwh1gy2dbJ4zRPa6am3YpRXDmTKB3lPt1nFiNQIvEPppw3gANM%2F8gjMNmf8YDCtsAaiulLUv2V8%2FB7ZREnLEK9e6a8rn1nTPgElDRHLckPXeFE5pKi3MQEB4peFKw1OYEctKy4v23g4Eh%2FrfUc30hxjHRM3LE1CSAga8T8uF1O39o45%2BBIJa8y9elZFNIwXIdkqxr4aOwQC5f5MGngOtsegfP1oh%2FDDc7J6pBjqwAW%2BAll8x98Xp48Q3rx4C5UrJe%2FrA8MQ1tzUXt%2BPZhy3UWtjL3%2FC4G5M%2BrTrqi8lkMs5ytak8FyAr55U%2FqeddKEOcdBBtIaxEBuqspki9GNO%2FG%2FlLalfhMJ%2FUM4QrfBe0aNdJUt41tPXNvbON5MKBJ3yhsoZjIOly1Jh%2FijoEMOacNBKxqfrCF3C8d4Aynd6RllVLXj7fT8H1SAAWxPLXxprl00uqLCQoOtnOvv9uwoeL&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231012T102323Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMTHMSYMQ%2F20231012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c4b2fe6f798288913e76bcc9e174bcddba7e56d70570ee56add4ed4587eba632",
        images: {
          THUMBNAIL: {
            url: "https://edamam-product-images.s3.amazonaws.com/web-img/a1d/a1defc00162e8000b02866247fc03616-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCxc%2FT1eNngBeUNdNS0VB0PkM2GIivnurOHARcGOhlzIwIhAKm%2BQUoFiojlcTD15izu4%2F4svMH0DUSZS3hXB3Aq1QEtKrkFCBIQABoMMTg3MDE3MTUwOTg2IgxiPKNY9bo4OMq7QZwqlgWh1NUADt0yY5fIGH%2FZLpmxQ5Zc9Pg8hLUQPH7PopfyiR7ysyWOQtCKvMnUE6VadpBOzpTg16s%2B8NDdhTp%2FTQ3oTmu5IKfTf4L0BdNUMtabL6xe%2FaUE8oJN8F0Kd3jmcDPMuiZLGWkUmXj4YroNYkZlL6S1ADXDkkUXYxR1d4%2F4UTMekVmZJseBAMLsh8sFY5cfjTSBsiujFMpEoPGe5nDxNF2hvzE6ISF11IGNgGkNJdyIGzTRDgUzSR55yNDPLe5XzRV8N%2FmpW3RpyFs9vS0SSygQgH%2F57%2F9gMRcM0GLnr5go2tTA9M92eU6rNppEkSrXQyG4%2FbJZ0uowiQ4klzyBr6abebHHV8i8EAgtDW5Ju3JESQEvSJalfXBMtz7Nlgqwitl1Ikbh8B87P8ahypCvYh4ZALyRu5KDRAFYwlRKTkvKz7RKFp9jzalGVEHJsbJwCLJqIsl9RImeXdqrfWunNcuGRJkQS0GydiwGy7pCCYIUZpicL5MPen1zCfjKPqoG3dSr6pmSG1uBJA2mZeLiSZlXfk8tHJk1voFspXhVRY%2FlcEcU3%2Fl3UQtGXT6SOpb8MUUgdCypxQKtnpMJa1tGBTaJSW2lZa0M96j79ehXAf7FUd9aXoSK265ovqz%2Ft6MkEBiGzbG9e3oQ%2FzcoHbEtUwh1gy2dbJ4zRPa6am3YpRXDmTKB3lPt1nFiNQIvEPppw3gANM%2F8gjMNmf8YDCtsAaiulLUv2V8%2FB7ZREnLEK9e6a8rn1nTPgElDRHLckPXeFE5pKi3MQEB4peFKw1OYEctKy4v23g4Eh%2FrfUc30hxjHRM3LE1CSAga8T8uF1O39o45%2BBIJa8y9elZFNIwXIdkqxr4aOwQC5f5MGngOtsegfP1oh%2FDDc7J6pBjqwAW%2BAll8x98Xp48Q3rx4C5UrJe%2FrA8MQ1tzUXt%2BPZhy3UWtjL3%2FC4G5M%2BrTrqi8lkMs5ytak8FyAr55U%2FqeddKEOcdBBtIaxEBuqspki9GNO%2FG%2FlLalfhMJ%2FUM4QrfBe0aNdJUt41tPXNvbON5MKBJ3yhsoZjIOly1Jh%2FijoEMOacNBKxqfrCF3C8d4Aynd6RllVLXj7fT8H1SAAWxPLXxprl00uqLCQoOtnOvv9uwoeL&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231012T102323Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMTHMSYMQ%2F20231012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=89da4609844c587fc32d46c7ab347fc97e080b0c395ad0efcd816a7d1a3a5139",
            width: 100,
            height: 100,
          },
          SMALL: {
            url: "https://edamam-product-images.s3.amazonaws.com/web-img/a1d/a1defc00162e8000b02866247fc03616-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCxc%2FT1eNngBeUNdNS0VB0PkM2GIivnurOHARcGOhlzIwIhAKm%2BQUoFiojlcTD15izu4%2F4svMH0DUSZS3hXB3Aq1QEtKrkFCBIQABoMMTg3MDE3MTUwOTg2IgxiPKNY9bo4OMq7QZwqlgWh1NUADt0yY5fIGH%2FZLpmxQ5Zc9Pg8hLUQPH7PopfyiR7ysyWOQtCKvMnUE6VadpBOzpTg16s%2B8NDdhTp%2FTQ3oTmu5IKfTf4L0BdNUMtabL6xe%2FaUE8oJN8F0Kd3jmcDPMuiZLGWkUmXj4YroNYkZlL6S1ADXDkkUXYxR1d4%2F4UTMekVmZJseBAMLsh8sFY5cfjTSBsiujFMpEoPGe5nDxNF2hvzE6ISF11IGNgGkNJdyIGzTRDgUzSR55yNDPLe5XzRV8N%2FmpW3RpyFs9vS0SSygQgH%2F57%2F9gMRcM0GLnr5go2tTA9M92eU6rNppEkSrXQyG4%2FbJZ0uowiQ4klzyBr6abebHHV8i8EAgtDW5Ju3JESQEvSJalfXBMtz7Nlgqwitl1Ikbh8B87P8ahypCvYh4ZALyRu5KDRAFYwlRKTkvKz7RKFp9jzalGVEHJsbJwCLJqIsl9RImeXdqrfWunNcuGRJkQS0GydiwGy7pCCYIUZpicL5MPen1zCfjKPqoG3dSr6pmSG1uBJA2mZeLiSZlXfk8tHJk1voFspXhVRY%2FlcEcU3%2Fl3UQtGXT6SOpb8MUUgdCypxQKtnpMJa1tGBTaJSW2lZa0M96j79ehXAf7FUd9aXoSK265ovqz%2Ft6MkEBiGzbG9e3oQ%2FzcoHbEtUwh1gy2dbJ4zRPa6am3YpRXDmTKB3lPt1nFiNQIvEPppw3gANM%2F8gjMNmf8YDCtsAaiulLUv2V8%2FB7ZREnLEK9e6a8rn1nTPgElDRHLckPXeFE5pKi3MQEB4peFKw1OYEctKy4v23g4Eh%2FrfUc30hxjHRM3LE1CSAga8T8uF1O39o45%2BBIJa8y9elZFNIwXIdkqxr4aOwQC5f5MGngOtsegfP1oh%2FDDc7J6pBjqwAW%2BAll8x98Xp48Q3rx4C5UrJe%2FrA8MQ1tzUXt%2BPZhy3UWtjL3%2FC4G5M%2BrTrqi8lkMs5ytak8FyAr55U%2FqeddKEOcdBBtIaxEBuqspki9GNO%2FG%2FlLalfhMJ%2FUM4QrfBe0aNdJUt41tPXNvbON5MKBJ3yhsoZjIOly1Jh%2FijoEMOacNBKxqfrCF3C8d4Aynd6RllVLXj7fT8H1SAAWxPLXxprl00uqLCQoOtnOvv9uwoeL&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231012T102323Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMTHMSYMQ%2F20231012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bc18b9c08042f8f029b3461e2460dd948dcae5b93adf0e3c336da8b8df509bfb",
            width: 200,
            height: 200,
          },
          REGULAR: {
            url: "https://edamam-product-images.s3.amazonaws.com/web-img/a1d/a1defc00162e8000b02866247fc03616.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCxc%2FT1eNngBeUNdNS0VB0PkM2GIivnurOHARcGOhlzIwIhAKm%2BQUoFiojlcTD15izu4%2F4svMH0DUSZS3hXB3Aq1QEtKrkFCBIQABoMMTg3MDE3MTUwOTg2IgxiPKNY9bo4OMq7QZwqlgWh1NUADt0yY5fIGH%2FZLpmxQ5Zc9Pg8hLUQPH7PopfyiR7ysyWOQtCKvMnUE6VadpBOzpTg16s%2B8NDdhTp%2FTQ3oTmu5IKfTf4L0BdNUMtabL6xe%2FaUE8oJN8F0Kd3jmcDPMuiZLGWkUmXj4YroNYkZlL6S1ADXDkkUXYxR1d4%2F4UTMekVmZJseBAMLsh8sFY5cfjTSBsiujFMpEoPGe5nDxNF2hvzE6ISF11IGNgGkNJdyIGzTRDgUzSR55yNDPLe5XzRV8N%2FmpW3RpyFs9vS0SSygQgH%2F57%2F9gMRcM0GLnr5go2tTA9M92eU6rNppEkSrXQyG4%2FbJZ0uowiQ4klzyBr6abebHHV8i8EAgtDW5Ju3JESQEvSJalfXBMtz7Nlgqwitl1Ikbh8B87P8ahypCvYh4ZALyRu5KDRAFYwlRKTkvKz7RKFp9jzalGVEHJsbJwCLJqIsl9RImeXdqrfWunNcuGRJkQS0GydiwGy7pCCYIUZpicL5MPen1zCfjKPqoG3dSr6pmSG1uBJA2mZeLiSZlXfk8tHJk1voFspXhVRY%2FlcEcU3%2Fl3UQtGXT6SOpb8MUUgdCypxQKtnpMJa1tGBTaJSW2lZa0M96j79ehXAf7FUd9aXoSK265ovqz%2Ft6MkEBiGzbG9e3oQ%2FzcoHbEtUwh1gy2dbJ4zRPa6am3YpRXDmTKB3lPt1nFiNQIvEPppw3gANM%2F8gjMNmf8YDCtsAaiulLUv2V8%2FB7ZREnLEK9e6a8rn1nTPgElDRHLckPXeFE5pKi3MQEB4peFKw1OYEctKy4v23g4Eh%2FrfUc30hxjHRM3LE1CSAga8T8uF1O39o45%2BBIJa8y9elZFNIwXIdkqxr4aOwQC5f5MGngOtsegfP1oh%2FDDc7J6pBjqwAW%2BAll8x98Xp48Q3rx4C5UrJe%2FrA8MQ1tzUXt%2BPZhy3UWtjL3%2FC4G5M%2BrTrqi8lkMs5ytak8FyAr55U%2FqeddKEOcdBBtIaxEBuqspki9GNO%2FG%2FlLalfhMJ%2FUM4QrfBe0aNdJUt41tPXNvbON5MKBJ3yhsoZjIOly1Jh%2FijoEMOacNBKxqfrCF3C8d4Aynd6RllVLXj7fT8H1SAAWxPLXxprl00uqLCQoOtnOvv9uwoeL&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231012T102323Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMTHMSYMQ%2F20231012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c4b2fe6f798288913e76bcc9e174bcddba7e56d70570ee56add4ed4587eba632",
            width: 300,
            height: 300,
          },
        },
        source: "Group Recipes",
        url: "http://www.grouprecipes.com/59195/coffe-mousse.html",
        shareAs:
          "http://www.edamam.com/recipe/coffe-mousse-recipe-2b088b11332df9e1009f185109029dbe/-",
        yield: "2.0n_____",
        dietLabels: ["Balanced"],
        healthLabels: [
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
        ],
        cautions: ["Sulfites"],
        ingredientLines: [
          "400ml milk",
          "80g sugar (powdered)",
          "4 egg-whites",
          "20g gelatin",
          "100g whipped cream",
          "20g coffee powder",
        ],
        ingredients: [
          {
            text: "400ml milk",
            quantity: "400.0n_____",
            measure: "milliliter",
            food: "milk",
            weight: 412.5310769624845,
            foodCategory: "Milk",
            foodId: "food_b49rs1kaw0jktabzkg2vvanvvsis",
            image:
              "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
          },
          {
            text: "80g sugar (powdered)",
            quantity: "80.0n_____",
            measure: "gram",
            food: "sugar",
            weight: "80.0n_____",
            foodCategory: "sugars",
            foodId: "food_axi2ijobrk819yb0adceobnhm1c2",
            image:
              "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg",
          },
          {
            text: "4 egg-whites",
            quantity: "4.0n_____",
            measure: "<unit>",
            food: "egg-whites",
            weight: 105.6,
            foodCategory: "Eggs",
            foodId: "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            image:
              "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg",
          },
          {
            text: "20g gelatin",
            quantity: "20.0n_____",
            measure: "gram",
            food: "gelatin",
            weight: "20.0n_____",
            foodCategory: "candy",
            foodId: "food_bh3w81wbiqrfmhbaw9hgwa3u7lky",
            image:
              "https://www.edamam.com/food-img/47a/47a5b5c20c3cbfaf7332d572a5bfddbe.jpg",
          },
          {
            text: "100g whipped cream",
            quantity: "100.0n_____",
            measure: "gram",
            food: "whipped cream",
            weight: "100.0n_____",
            foodCategory: "Dairy",
            foodId: "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
            image:
              "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg",
          },
          {
            text: "20g coffee powder",
            quantity: "20.0n_____",
            measure: "gram",
            food: "coffee",
            weight: "20.0n_____",
            foodCategory: "coffee and tea",
            foodId: "food_ax0a0yxbbe4hx0apiz1tla01s2w7",
            image:
              "https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg",
          },
        ],
        calories: 940.3559569471157,
        totalCO2Emissions: 6422.612167333443,
        co2EmissionsClass: "G",
        totalWeight: 738.1310769624845,
        totalTime: "20.0n_____",
        cuisineType: ["british"],
        mealType: ["lunch/dinner"],
        dishType: ["desserts"],
        totalNutrients: {
          ENERC_KCAL: {
            label: "Energy",
            quantity: 940.3559569471157,
            unit: "kcal",
          },
          FAT: {
            label: "Fat",
            quantity: 35.81078000128074,
            unit: "g",
          },
          FASAT: {
            label: "Saturated",
            quantity: 21.487478031502214,
            unit: "g",
          },
          FATRN: {
            label: "Trans",
            quantity: "0.0n_____",
            unit: "g",
          },
          FAMS: {
            label: "Monounsaturated",
            quantity: 9.784752344935374,
            unit: "g",
          },
          FAPU: {
            label: "Polyunsaturated",
            quantity: 1.6316356000768448,
            unit: "g",
          },
          CHOCDF: {
            label: "Carbs",
            quantity: 113.07237169419926,
            unit: "g",
          },
          "CHOCDF.net": {
            label: "Carbohydrates (net)",
            quantity: 113.07237169419926,
            unit: "g",
          },
          FIBTG: {
            label: "Fiber",
            quantity: "0.0n_____",
            unit: "g",
          },
          SUGAR: {
            label: "Sugars",
            quantity: 109.42257938660546,
            unit: "g",
          },
          "SUGAR.added": {
            label: "Sugars, added",
            quantity: 79.84,
            unit: "g",
          },
          PROCNT: {
            label: "Protein",
            quantity: 44.849128924318265,
            unit: "g",
          },
          CHOLE: {
            label: "Cholesterol",
            quantity: 117.25310769624846,
            unit: "mg",
          },
          NA: {
            label: "Sodium",
            quantity: 401.0843630938684,
            unit: "mg",
          },
          CA: {
            label: "Calcium",
            quantity: 586.7521169676075,
            unit: "mg",
          },
          MG: {
            label: "Magnesium",
            quantity: 68.86910769624845,
            unit: "mg",
          },
          K: {
            label: "Potassium",
            quantity: 878.2690215904796,
            unit: "mg",
          },
          FE: {
            label: "Iron",
            quantity: 0.5222393230887454,
            unit: "mg",
          },
          ZN: {
            label: "Zinc",
            quantity: 1.968044984761193,
            unit: "mg",
          },
          P: {
            label: "Phosphorus",
            quantity: 459.76610464848704,
            unit: "mg",
          },
          VITA_RAE: {
            label: "Vitamin A",
            quantity: 377.7642954027429,
            unit: "µg",
          },
          VITC: {
            label: "Vitamin C",
            quantity: "0.0n_____",
            unit: "mg",
          },
          THIA: {
            label: "Thiamin (B1)",
            quantity: 0.2387882954027429,
            unit: "mg",
          },
          RIBF: {
            label: "Riboflavin (B2)",
            quantity: 1.302161520066599,
            unit: "mg",
          },
          NIA: {
            label: "Niacin (B3)",
            quantity: 0.6032326584966112,
            unit: "mg",
          },
          VITB6A: {
            label: "Vitamin B6",
            quantity: 0.19639118770649447,
            unit: "mg",
          },
          FOLDFE: {
            label: "Folate equivalent (total)",
            quantity: 34.25055384812423,
            unit: "µg",
          },
          FOLFD: {
            label: "Folate (food)",
            quantity: 34.25055384812423,
            unit: "µg",
          },
          FOLAC: {
            label: "Folic acid",
            quantity: "0.0n_____",
            unit: "µg",
          },
          VITB12: {
            label: "Vitamin B12",
            quantity: 2.2414298463311804,
            unit: "µg",
          },
          VITD: {
            label: "Vitamin D",
            quantity: 5.762904000512299,
            unit: "µg",
          },
          TOCPHA: {
            label: "Vitamin E",
            quantity: 0.9307717538737392,
            unit: "mg",
          },
          VITK1: {
            label: "Vitamin K",
            quantity: 3.1575932308874535,
            unit: "µg",
          },
          WATER: {
            label: "Water",
            quantity: 539.7414788039489,
            unit: "g",
          },
        },
        totalDaily: {
          ENERC_KCAL: {
            label: "Energy",
            quantity: 47.01779784735579,
            unit: "%",
          },
          FAT: {
            label: "Fat",
            quantity: 55.09350769427806,
            unit: "%",
          },
          FASAT: {
            label: "Saturated",
            quantity: 107.43739015751108,
            unit: "%",
          },
          CHOCDF: {
            label: "Carbs",
            quantity: 37.690790564733085,
            unit: "%",
          },
          FIBTG: {
            label: "Fiber",
            quantity: "0.0n_____",
            unit: "%",
          },
          PROCNT: {
            label: "Protein",
            quantity: 89.69825784863653,
            unit: "%",
          },
          CHOLE: {
            label: "Cholesterol",
            quantity: 39.08436923208282,
            unit: "%",
          },
          NA: {
            label: "Sodium",
            quantity: 16.711848462244514,
            unit: "%",
          },
          CA: {
            label: "Calcium",
            quantity: 58.675211696760755,
            unit: "%",
          },
          MG: {
            label: "Magnesium",
            quantity: 16.39740659434487,
            unit: "%",
          },
          K: {
            label: "Potassium",
            quantity: 18.686574927457013,
            unit: "%",
          },
          FE: {
            label: "Iron",
            quantity: 2.9013295727152526,
            unit: "%",
          },
          ZN: {
            label: "Zinc",
            quantity: 17.891318043283572,
            unit: "%",
          },
          P: {
            label: "Phosphorus",
            quantity: 65.680872092641,
            unit: "%",
          },
          VITA_RAE: {
            label: "Vitamin A",
            quantity: 41.97381060030477,
            unit: "%",
          },
          VITC: {
            label: "Vitamin C",
            quantity: "0.0n_____",
            unit: "%",
          },
          THIA: {
            label: "Thiamin (B1)",
            quantity: 19.899024616895243,
            unit: "%",
          },
          RIBF: {
            label: "Riboflavin (B2)",
            quantity: 100.16627077435378,
            unit: "%",
          },
          NIA: {
            label: "Niacin (B3)",
            quantity: 3.7702041156038204,
            unit: "%",
          },
          VITB6A: {
            label: "Vitamin B6",
            quantity: 15.107014438961112,
            unit: "%",
          },
          FOLDFE: {
            label: "Folate equivalent (total)",
            quantity: 8.562638462031057,
            unit: "%",
          },
          VITB12: {
            label: "Vitamin B12",
            quantity: 93.39291026379918,
            unit: "%",
          },
          VITD: {
            label: "Vitamin D",
            quantity: 38.41936000341533,
            unit: "%",
          },
          TOCPHA: {
            label: "Vitamin E",
            quantity: 6.205145025824929,
            unit: "%",
          },
          VITK1: {
            label: "Vitamin K",
            quantity: 2.6313276924062112,
            unit: "%",
          },
        },
        digest: [
          {
            label: "Fat",
            tag: "FAT",
            schemaOrgTag: "fatContent",
            total: 35.81078000128074,
            hasRDI: true,
            daily: 55.09350769427806,
            unit: "g",
            sub: [
              {
                label: "Saturated",
                tag: "FASAT",
                schemaOrgTag: "saturatedFatContent",
                total: 21.487478031502214,
                hasRDI: true,
                daily: 107.43739015751108,
                unit: "g",
              },
              {
                label: "Trans",
                tag: "FATRN",
                schemaOrgTag: "transFatContent",
                total: "0.0n_____",
                hasRDI: false,
                daily: "0.0n_____",
                unit: "g",
              },
              {
                label: "Monounsaturated",
                tag: "FAMS",
                schemaOrgTag: null,
                total: 9.784752344935374,
                hasRDI: false,
                daily: "0.0n_____",
                unit: "g",
              },
              {
                label: "Polyunsaturated",
                tag: "FAPU",
                schemaOrgTag: null,
                total: 1.6316356000768448,
                hasRDI: false,
                daily: "0.0n_____",
                unit: "g",
              },
            ],
          },
          {
            label: "Carbs",
            tag: "CHOCDF",
            schemaOrgTag: "carbohydrateContent",
            total: 113.07237169419926,
            hasRDI: true,
            daily: 37.690790564733085,
            unit: "g",
            sub: [
              {
                label: "Carbs (net)",
                tag: "CHOCDF.net",
                schemaOrgTag: null,
                total: 113.07237169419926,
                hasRDI: false,
                daily: "0.0n_____",
                unit: "g",
              },
              {
                label: "Fiber",
                tag: "FIBTG",
                schemaOrgTag: "fiberContent",
                total: "0.0n_____",
                hasRDI: true,
                daily: "0.0n_____",
                unit: "g",
              },
              {
                label: "Sugars",
                tag: "SUGAR",
                schemaOrgTag: "sugarContent",
                total: 109.42257938660546,
                hasRDI: false,
                daily: "0.0n_____",
                unit: "g",
              },
              {
                label: "Sugars, added",
                tag: "SUGAR.added",
                schemaOrgTag: null,
                total: 79.84,
                hasRDI: false,
                daily: "0.0n_____",
                unit: "g",
              },
            ],
          },
          {
            label: "Protein",
            tag: "PROCNT",
            schemaOrgTag: "proteinContent",
            total: 44.849128924318265,
            hasRDI: true,
            daily: 89.69825784863653,
            unit: "g",
          },
          {
            label: "Cholesterol",
            tag: "CHOLE",
            schemaOrgTag: "cholesterolContent",
            total: 117.25310769624846,
            hasRDI: true,
            daily: 39.08436923208282,
            unit: "mg",
          },
          {
            label: "Sodium",
            tag: "NA",
            schemaOrgTag: "sodiumContent",
            total: 401.0843630938684,
            hasRDI: true,
            daily: 16.711848462244514,
            unit: "mg",
          },
          {
            label: "Calcium",
            tag: "CA",
            schemaOrgTag: null,
            total: 586.7521169676075,
            hasRDI: true,
            daily: 58.675211696760755,
            unit: "mg",
          },
          {
            label: "Magnesium",
            tag: "MG",
            schemaOrgTag: null,
            total: 68.86910769624845,
            hasRDI: true,
            daily: 16.39740659434487,
            unit: "mg",
          },
          {
            label: "Potassium",
            tag: "K",
            schemaOrgTag: null,
            total: 878.2690215904796,
            hasRDI: true,
            daily: 18.686574927457013,
            unit: "mg",
          },
          {
            label: "Iron",
            tag: "FE",
            schemaOrgTag: null,
            total: 0.5222393230887454,
            hasRDI: true,
            daily: 2.9013295727152526,
            unit: "mg",
          },
          {
            label: "Zinc",
            tag: "ZN",
            schemaOrgTag: null,
            total: 1.968044984761193,
            hasRDI: true,
            daily: 17.891318043283572,
            unit: "mg",
          },
          {
            label: "Phosphorus",
            tag: "P",
            schemaOrgTag: null,
            total: 459.76610464848704,
            hasRDI: true,
            daily: 65.680872092641,
            unit: "mg",
          },
          {
            label: "Vitamin A",
            tag: "VITA_RAE",
            schemaOrgTag: null,
            total: 377.7642954027429,
            hasRDI: true,
            daily: 41.97381060030477,
            unit: "µg",
          },
          {
            label: "Vitamin C",
            tag: "VITC",
            schemaOrgTag: null,
            total: "0.0n_____",
            hasRDI: true,
            daily: "0.0n_____",
            unit: "mg",
          },
          {
            label: "Thiamin (B1)",
            tag: "THIA",
            schemaOrgTag: null,
            total: 0.2387882954027429,
            hasRDI: true,
            daily: 19.899024616895243,
            unit: "mg",
          },
          {
            label: "Riboflavin (B2)",
            tag: "RIBF",
            schemaOrgTag: null,
            total: 1.302161520066599,
            hasRDI: true,
            daily: 100.16627077435378,
            unit: "mg",
          },
          {
            label: "Niacin (B3)",
            tag: "NIA",
            schemaOrgTag: null,
            total: 0.6032326584966112,
            hasRDI: true,
            daily: 3.7702041156038204,
            unit: "mg",
          },
          {
            label: "Vitamin B6",
            tag: "VITB6A",
            schemaOrgTag: null,
            total: 0.19639118770649447,
            hasRDI: true,
            daily: 15.107014438961112,
            unit: "mg",
          },
          {
            label: "Folate equivalent (total)",
            tag: "FOLDFE",
            schemaOrgTag: null,
            total: 34.25055384812423,
            hasRDI: true,
            daily: 8.562638462031057,
            unit: "µg",
          },
          {
            label: "Folate (food)",
            tag: "FOLFD",
            schemaOrgTag: null,
            total: 34.25055384812423,
            hasRDI: false,
            daily: "0.0n_____",
            unit: "µg",
          },
          {
            label: "Folic acid",
            tag: "FOLAC",
            schemaOrgTag: null,
            total: "0.0n_____",
            hasRDI: false,
            daily: "0.0n_____",
            unit: "µg",
          },
          {
            label: "Vitamin B12",
            tag: "VITB12",
            schemaOrgTag: null,
            total: 2.2414298463311804,
            hasRDI: true,
            daily: 93.39291026379918,
            unit: "µg",
          },
          {
            label: "Vitamin D",
            tag: "VITD",
            schemaOrgTag: null,
            total: 5.762904000512299,
            hasRDI: true,
            daily: 38.41936000341533,
            unit: "µg",
          },
          {
            label: "Vitamin E",
            tag: "TOCPHA",
            schemaOrgTag: null,
            total: 0.9307717538737392,
            hasRDI: true,
            daily: 6.205145025824929,
            unit: "mg",
          },
          {
            label: "Vitamin K",
            tag: "VITK1",
            schemaOrgTag: null,
            total: 3.1575932308874535,
            hasRDI: true,
            daily: 2.6313276924062112,
            unit: "µg",
          },
          {
            label: "Sugar alcohols",
            tag: "Sugar.alcohol",
            schemaOrgTag: null,
            total: "0.0n_____",
            hasRDI: false,
            daily: "0.0n_____",
            unit: "g",
          },
          {
            label: "Water",
            tag: "WATER",
            schemaOrgTag: null,
            total: 539.7414788039489,
            hasRDI: false,
            daily: "0.0n_____",
            unit: "g",
          },
        ],
      },
    };
  },
  methods: {

  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');

.container {
  display: flex;
  flex-direction: column;
  font-family: 'Mukta', sans-serif;
  padding: 30px;

  & .meal-section {
    display: flex;
    flex-direction: row;
    gap: 40px;

    & .meal-card {
      display: flex;
      flex-direction: column;
      background: gray;

      /* height: 500px; */
      & .meal-card-image {
        padding: 20px;
      }

      & img {
        height: 300px;
        width: 300px;
      }

      & .meal-card-info {
        display: flex;
        flex-direction: column;
        padding: 20px;
      }
    }
  }
}
</style>
