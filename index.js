<html>
  <body>
      <p>Une ligne html </p>
      <p id="ici">... paragraphe vide ...</p>
      </p>Une autre ligne html</p>
      <script>
      document.getElementById("ici").innerHTML = "Bonjour de merde <em>Javascript</em>";
      </script> 
   </body>
</html>