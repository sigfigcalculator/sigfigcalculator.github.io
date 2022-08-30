---
title: Significant Figures Calculator
---


# Significant Figures Calculator

The Significant Figures Calculator will help you rapidly calculate the number of significant figures in an expression or a number. In addition, it will show you how to add zero before any given digit and remove one from the last digit of a given series (e.g., 2456).

This quick reference tool is easy to use and can be opened as often as needed with no time limits. If your work depends on significant figures, this app is mandatory.

## How it works:

Enter a decimal value below along with a number of significant figures, then click the button to display the value with the desired number of significant figures.


<form action="" class="form-inline" id="num-sig-figs-form">
Express <input id="number" type="number" class="form-control" style="width: 140px;" placeholder="Number" /> to <input id="num-sig-figs" type="number" class="form-control" style="width: 80px;" placeholder="Integer" /> significant figure(s).
</form>


<p>
<button class="btn btn-primary" onclick="if(parseInt($('#num-sig-figs').val()) > 0 && parseFloat($('#number').val())) { showWithSigFigs($('#number').val(), $('#num-sig-figs').val()); $('#num-sig-figs-form').removeClass('has-error'); } else { $('num-sig-figs-form').addClass('has-error'); }">Do It!</button>
<span class="btn btn-success disabled" id="output">Output</span>
</p>

<h2>The Basics</h2>
<p>
The significant figures of a number written in positional notation are digits that carry meaningful contributions to its measurement resolution. This includes all digits except: All leading zeros. 
</p>
<p>The number of digits that are known with certainty plus one digit that is estimated is called significant figures.</p>
<p>For example, if a number is known to be between 1 and 10, it has one significant figure. If a number is known to be between 10 and 100, it has two significant figures.  The estimated digit is always the first digit to the right of the known digits. In the example above, the estimated digit would be 1 for the number between 1 and 10, and 10 for the number between 10 and 100. </p>
<p>The estimated digit is always rounded up or down to the nearest known digit. So, in the example above, the number between 1 and 10 would be rounded up to 2, and the number between 10 and 100 would be rounded down to 9. </p>
<p>The significant figures of a number can be used to estimate the uncertainty of that number. The more significant figures a number has, the more certain it is.  For example, if a number is known to be between 1 and 10, it has one significant figure. This means that the number could be anywhere between 1 and 10, so the uncertainty is 9.  If a number is known to be between 10 and 100, it has two significant figures. This means that the number could be anywhere between 10 and 100, so the uncertainty is 90. </p>
<p>The significant figures of a number can also be used to estimate the precision of that number. The more significant figures a number has, the more precise it is. </p>
<p>For example, if a number is known to be between 1 and 10, it has one significant figure. This means that the number could be anywhere between 1 and 10, so the precision is 1.  If a number is known to be between 10 and 100, it has two significant figures. This means that the number could be anywhere between 10 and 100, so the precision is 10.</p>


<p>Steps How to calculate significant figures</p>
<ol>
<li>Find the first non-zero digit in the number</li>
<li>Count the number of digits from the first non-zero digit to the end of the number</li>
<li>The number of significant figures is equal to the number of digits counted in Step 2</li>
</ol>
<p>For example:</p>
<ul>
<li>0.004321 has 4 significant figures (4, 3, 2, 1)</li>
<li>0.01 has 2 significant figures (1, 0)</li>
<li>1.234 has 4 significant figures (1, 2, 3, 4)</li>
<li>120 has 3 significant figures (1, 2, 0)</li>
</ul>



<h2>Examples of significant figure calculations:</h2>
<p>
  
<li>7 has 1 significant figure (7).</li>

<li>73 has 2 significant figures (7 and 3).</li>

<li>100 has 1 significant figure (1).</li>

<li>673 has 3 significant figures (6, 7 and 3).</li>

<li>673.52 has 5 significant figures (6, 3, 7, 5 and 2).</li>

<li>0.0637 has 3 significant figures (6, 3 and 7).</li>

<li>30.00 has 4 significant figures (3, 0, 0 and 0) and 2 decimals.</li>

<li>0.0025 has 2 significant figures (2 and 5) and 4 decimals.</li>

</p>
</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script type="text/javascript" src="sig-figs.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

<script type="text/javascript">
  
function showWithSigFigs(numStr, n) {
var num = parseInt(n);
var sf = new SigFloat(numStr);
$('#output').html(sf.withSigFigures(num).toFixed());
}
</script>
