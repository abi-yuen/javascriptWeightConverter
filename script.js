  document.getElementById('output').style.visibility = 'hidden';

  document.getElementById('lbsInput').addEventListener('input',function(e){
      document.getElementById('output').style.visibility = 'visible';
      let lbs = e.target.value;
      document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(2);
      document.getElementById('kilogramsOutput').innerHTML = (lbs/2.2046).toFixed(2);
      document.getElementById('OuncesOutput').innerHTML = (lbs*16).toFixed(2);

      if(document.getElementById('lbsInput').value.length === 0){
        document.getElementById('output').style.visibility = 'hidden';
      }
  });