---
title: Significant Figures Calculator
---


<div class="container">
<div class="page-header">
<h2>Significant Figures Calculator</h2>
<small>math with significance</small>

</div>

<h2>How it works:</h2>
<p>
Enter a decimal value below along with a number of significant figures, then click the button to display the value with the desired number of significant figures.
</p>
<p>
<form action="" class="form-inline" id="num-sig-figs-form">
Express <input id="number" type="number" class="form-control" style="width: 140px;" placeholder="Number" /> to <input id="num-sig-figs" type="number" class="form-control" style="width: 80px;" placeholder="Integer" /> significant figure(s).
</form>
</p>
<p>
<button class="btn btn-primary" onclick="if(parseInt($('#num-sig-figs').val()) > 0 && parseFloat($('#number').val())) { showWithSigFigs($('#number').val(), $('#num-sig-figs').val()); $('#num-sig-figs-form').removeClass('has-error'); } else { $('num-sig-figs-form').addClass('has-error'); }">Do It!</button>
<span class="btn btn-success disabled" id="output">Output</span>
</p>

<h2>The Basics</h2>
<p>
The significant figures of a number written in positional notation are digits that carry meaningful contributions to its measurement resolution. This includes all digits except: All leading zeros. 
</p>

<h2>Examples of significant figure calculations:</h2>
<p>
  
* 7 has 1 significant figure (7).
* 73 has 2 significant figures (7 and 3).
* 100 has 1 significant figure (1).
* 673 has 3 significant figures (6, 7 and 3).
* 673.52 has 5 significant figures (6, 3, 7, 5 and 2).
* 0.0637 has 3 significant figures (6, 3 and 7).
* 30.00 has 4 significant figures (3, 0, 0 and 0) and 2 decimals.
* 0.0025 has 2 significant figures (2 and 5) and 4 decimals.
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
