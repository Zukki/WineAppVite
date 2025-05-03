import './style.css'

document.querySelector<HTMLDivElement>('#scorecardFormDiv')!.innerHTML = `
<h1>v0_1b</h1>
<form id="scorecardForm">
      <fieldset>
         <legend>Guest</legend>
         <label for="guestName">Guest name:</label>
         <input type="text" id="guestName" name="Header.GuestName" value="Guest Name" required><br>

         <legend>Wine</legend>
         <label for="wineName">Wine name:</label>
         <input type="text" id="wineName" name="Header.WineName" value="Wine Id" required><br>
      </fieldset>

      <fieldset>
         <legend>Appearance</legend>
         <label for="clarity">Clarity:</label>
         <input type="number" id="clarity" name="Appearence.Clarity" value="1" step="0.1" min="0" max="1" required><br>
         <p>
            1 point max
            Brilliant star bright crystal leggy 1
            Translucent slightly dull pearling 0.5
            Cloudy hazy sediment watery 0
         </p>

         <label for="color">Color:</label>
         <input type="number" id="color" name="Appearence.Color" value="1" step="0.1" min="0" max="1" required><br>
         <p>
            1 point max
            Typical for type and age vivid 1
            Nearly correct attractive lively 0.5
            Off maderized brown colorless 0
         </p>
      </fieldset>

      <fieldset>
         <legend>Aroma</legend>
         <label for="aroma">Aroma:</label>
         <input type="number" id="aroma" name="Aroma.Aroma" value="2" step="0.1" min="0" max="4" required><br>
         <p>
            4 points max
            Varietal characteristic complex flowery 4
            Fruity pronounced developed essence 3
            Clean pleasant scented delicate 2
            Fleeting simple undeveloped elusive 1
            Defective off sulfurous vinegary 0
         </p>
      </fieldset>

      <fieldset>
         <legend>Balance</legend>
         <label for="sweetness">Sweetness:</label>
         <input type="number" id="sweetness" name="Balance.Sweetness" value="0.5" step="0.1" min="0" max="1"
            required><br>
         <p>
            1 point max
            Appropriate to type balanced normal 1
            Sweet edged slightly lacking 0.5
            Cloying syrupy sugary lacking 0
         </p>

         <label for="acidity">Acidity:</label>
         <input type="number" id="acidity" name="Balance.Acidity" value="1" step="0.1" min="0" max="1" required><br>
         <p>
            1 point max
            Balanced appropriate to type 1
            Slightly low or high slightly tart 0.5
            Flabby insipid raw harsh vinegary 0
         </p>

         <label for="bitterness">Bitterness/Astringency:</label>
         <input type="number" id="bitterness" name="Balance.Bitterness_Astringency" value="1" step="0.1" min="0" max="1"
            required><br>
         <p>
            1 point max
            Balanced normal appropriate for age 1
            Citric slightly bitter medium 0.5
            Bitter harsh withered 0
         </p>
      </fieldset>

      <fieldset>
         <legend>Body</legend>
         <label for="body">Body:</label>
         <input type="number" id="body" name="Body.Body" value="1" step="0.1" min="0" max="2" required><br>
         <p>
            2 points max
            Appropriate firm sound velvety silky 2
            Nearly correct smooth even 1.5
            Slightly thin heavy 1
            Uneven awkward coarse 0.5
            Empty thin rough clumsy 0
         </p>
      </fieldset>

      <fieldset>
         <legend>Flavor</legend>
         <label for="flavor">Flavor:</label>
         <input type="number" id="flavor" name="Flavor.Flavor" value="3" step="0.1" min="0" max="4" required><br>
         <p>
            4 points max
            Complex mature varietal luscious 4
            Fruity robust multilayered 3
            Agreeable clean simple 2
            Lacking green 1
            Chemical stemmy hollow 0
         </p>
      </fieldset>

      <fieldset>
         <legend>Finish</legend>
         <label for="finish">Finish:</label>
         <input type="number" id="finish" name="Finish.Finish" value="1" step="0.1" min="0" max="2" required><br>
         <p>
            2 points max
            Appropriate for age enticing lasting 2
            Nearly correct tapering 1
            Harsh withered 0
         </p>
      </fieldset>

      <fieldset>
         <legend>Overall Impression</legend>
         <label for="overall">Overall Impression:</label>
         <input type="number" id="overall" name="Overall_Impression.Overall_Impression" value="2" step="0.1" min="0"
            max="3" required><br>
         <p>
            3 points max
            Noble distinguished elegant grand 3
            Character graceful skillfully made 2
            No exceptional features 1
            Flawed 0
         </p>
      </fieldset>

      <fieldset>
         <legend>Total Score</legend>
         <label for="totalScore">Total Score:</label>
         <input type="number" id="totalScore" name="Total_Score.Total_Score" value="13.5" step="0.1" min="0" max="20"
            required><br>
         <p>
            20 points max
         </p>
      </fieldset>

      <button type="submit">Submit</button>
   </form>
`

document.addEventListener('scorecardForm', () => {
    const form = document.getElementById('scorecardForm') as HTMLFormElement;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data: { [key: string]: string } = {};
  
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
  
      console.log('Form Data:', data);
    });
  });