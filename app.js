  function appendToResult(value) {
            document.getElementById("result").value += value;
        }

        function clearResult() {
            document.getElementById("result").value = "";
        }

        function calculateResult() {
            try {
                const expression = document.getElementById("result").value;
                const result = new Function('"use strict";return (' + expression + ')')();
                document.getElementById("result").value = result;
            } catch {
                document.getElementById("result").value = "Error";
            }
        }