jQuery(function ($) 
{
    $.fn.my_wysiwyg = function (options = 
    {
    	// declaration des options
        option1: 'bold',
        option2: 'italic',
        option3: 'strikethrough',
        option4: 'left',
        option5: 'center',
        option6: 'right',
        option7: 'justify',
        option8: 'url',
        option9: 'plus',
        option10: 'minus',
        option11: 'fontSize',
        option12: 'fontColor',
        option13: 'insertImage'
    })
    {
        var $textarea = $('#textarea')
        var inputBold, inputItalic, inputStrike, textLeft, textCenter, textRight, justify, createLink, plusButton, minusButton, fontSize, colorPicker, insertImage

        // plug in
        // gestion des otpions
        for (var option in options) 
        {
            if (jQuery.type(options[option]) === 'array') 
            {
                for (var i = 0; i < options[option].length; i++) 
                {
                    if (options[option][i] === 'bold') 
                    {
                        inputBold()
                    }

                    if (options[option][i] === 'italic') 
                    {
                        inputItalic()
                    }

                    if (options[option][i] === 'strikethrough') 
                    {
                    	inputStrike()
                    }

                    if (options[option][i] === 'left')
                    {
                    	textLeft()
                    }

                    if (options[option][i] === 'center')
                    {
                    	textCenter()
                    }

                    if (options[option][i] === 'right')
                    {
                    	textRight()
                    }

                    if (options[option][i] === 'justify')
                    {
                    	justify()
                    }

                    if (options[option][i] === 'url')
                    {
                    	createLink()
                    }

                    if (options[option][i] === 'plus')
                    {
                    	plusButton()
                    }

                    if (options[option][i] === 'minus')
                    {
                    	minusButton()
                    } 

                    if (options[option][i] === 'fontSize')
                    {
                    	fontSize()
                    } 

                    if (options[option][i] === 'fontColor')
                    {
                    	colorPicker()
                    } 

                    if (options[option][i] === 'insertImage')
                    {
                    	inputImage()
                    } 
                }
            }
        }
    // fonctions des options
 	function inputBold()
 	{
    	$inputBold = $('<input type="button" value="B"></input>')
    	$textarea.append($inputBold)
    	$inputBold.css('font-weight', 'bold')
    	$inputBold.click(function () 
    	{
    	    document.execCommand('bold', false, null);
    	})
	}
    function inputItalic() 
    {
        $inputItalic = $('<input type="button" value="I"></input>')
        $textarea.append($inputItalic)
        $inputItalic.css('font-style', 'italic')
        $inputItalic.click(function () 
        {
            document.execCommand('italic', false, null);
    	})
    }

    function inputStrike() 
    {
    	$inputStrike = $('<input type="button" value="T"></input>')
    	$textarea.append($inputStrike)
    	$inputStrike.css('text-decoration', 'line-through')
    	$inputStrike.click(function () 
    	{
    		document.execCommand('strikethrough', false, null);
    	})
    }

    function textLeft()
    {
    	$textLeft = $('<input type="button" value="L"></input>')
    	$textarea.append($textLeft)
    	$textLeft.click(function () 
    	{
    		document.execCommand('justifyLeft', false, null);
    	})
    }

    function textCenter()
    {
    	$textCenter = $('<input type="button" value="C"></input>')
    	$textarea.append($textCenter)
    	$textCenter.click(function () 
    	{
    		document.execCommand('justifyCenter', false, null);
    	})
    }

    function textRight()
    {
    	$textRight = $('<input type="button" value="R"></input>')
    	$textarea.append($textRight)
    	$textRight.click(function () 
    	{
    		document.execCommand('justifyRight', false, null);
    	})
    }

     function justify()
    {
    	$justify = $('<input type="button" value="J"></input>')
    	$textarea.append($justify)
    	$justify.click(function ()
    	{
    		document.execCommand('JustifyFull', false, null);
    	})
    }

     function createLink()
    {
    	$createLink = $('<input type="button" value="url"></input>')
    	$textarea.append($createLink)
    	$createLink.click(function ()
    	{
    		document.execCommand('createLink', false, null);
    	})
    }

    function minusButton()
    {
 	    $minusButton = $('<input type="button" value="-"></input>')
 	    $textarea.append($minusButton) 
		$minusButton.click(function ()
		{
			var currentSize = $textarea.css('font-size');         
            var currentSize = parseFloat(currentSize) - 1;          
            $textarea.css('font-size', currentSize);         
			document.execCommand('fontSize', false, null);
		})
	}
    
    function plusButton()
    {
 	    $plusButton = $('<input type="button" value="+"></input>')
 	    $textarea.append($plusButton) 
		$plusButton.click(function ()
		{
			var currentSize = $textarea.css('font-size');         
            var currentSize = parseFloat(currentSize) + 1;          
            $textarea.css('font-size', currentSize);         
			document.execCommand('fontSize', false, null);
		})
	}

	function fontSize()
	{
		$selectSize = $('<select></select>')
		$optionSize = $('<option value="1">1</option>' + '<option value="2">2</option>' + '<option value="3">3</option>' + '<option value="4" selected>4</option>' + '<option value="5">5</option>')
		$textarea.append($selectSize)
		$selectSize.append($optionSize)
		$selectSize.change(function ()
		{
			document.execCommand('fontSize', false, $(this).val());
		})
	}

	function colorPicker()
    {
    	$colorPicker = $('<input type="color"></input>')
    	$textarea.append($colorPicker)
    	$colorPicker.click(function () 
    	{
    		$textarea.css('color', $(this).val())
    		document.execCommand('foreColor', false, null);
    	})
    }

    function inputImage()
    {
    	$inputImage = $('<input type="button" value="img"></input>')
    	$textarea.append($inputImage)
    	$inputImage.click(function () 
    	{
    		document.execCommand('insertImage', false, null);
    	})
    }

}
})
