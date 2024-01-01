from datetime import date

import arrr
from pyscript import document
from js import updateChart

from pyodide.ffi import create_proxy, to_js


def translate_english(event):
    input_text = document.querySelector("#english")
    english = input_text.value
    output_div = document.querySelector("#output")
    output_div.innerText = arrr.translate(english)
    updateChart(to_js([
        date(2022,6,6), date(2023,4,7), date(2023,7,7), date(2023,7,10)]
    ), to_js([1,5,2,4]))
