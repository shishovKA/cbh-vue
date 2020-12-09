export function create() {
	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	var cn = document.querySelector('#splash-cover'),
		c = document.querySelector('#splash-cover canvas'),
	    $ = c.getContext('2d'),
	    w = c.width = cn.offsetWidth,
	    h = c.height = cn.offsetHeight,
	    arr = [],
	    u = Math.random() * 200,
	    o = 0;

	var ready = function() {
		$.fillStyle = '#000000';
		$.fillRect(0,0,w,h);
		$.globalCompositeOperation = "source-over";

	    arr = [];
	    for (var i = 0; i < 20; i++) {
	        set();
	    }
	}

	var set = function() {
	    arr.push({
	        x1: w,
	        y1: h,
	        _x1: w - Math.random() * w,
	        _y1: h - Math.random() * h,
	        _x2: w - Math.random() * w,
	        _y2: h - Math.random() * h,
	        x2: -w + Math.random() * w,
	        y2: -h + Math.random() * h,
	        rot: Math.random() * 180,
	        a1: Math.random() * 10,
	        a2: Math.random() * 10,
	        a3: Math.random() * 10
	    });
	}

	var stop = false;
	var pretty = function() {
		u-=.03;
	    for (var i in arr) {
	        var b = arr[i];
	        b._x1 *= Math.sin(b.a1 -= 0.001);
	        b._y1 *= Math.sin(b.a1);
	        b._x2 -= Math.sin(b.a2 += 0.001);
	        b._y1 += Math.sin(b.a2);
	        b.x1 -= Math.sin(b.a3 += 0.001);
	        b.y1 += Math.sin(b.a3);
	        b.x2 -= Math.sin(b.a3 -= 0.001);
	        b.y2 += Math.sin(b.a3);
	        $.save();
	        $.globalAlpha = 0.03;
	        $.beginPath();
	        $.strokeStyle = 'hsla('+ u + ', 85%, 60%, .7)';
	        // console.log('hsla('+ u + ', 85%, 60%, .7)');
	        $.moveTo(b.x1, b.y1);
	        $.bezierCurveTo(b._x1, b._y1, b._x2, b._y2, b.x2, b.y2);
	        $.stroke();
	        $.restore();
	    }
	    if (!stop) window.requestAnimFrame(pretty);
	}
	ready();
	pretty();
	setTimeout(function(){
		stop = true;
	}, 15000);

	var resizeId;
	window.addEventListener('resize', function() {
	    clearTimeout(resizeId);
	    resizeId = setTimeout(function() {
		    w = c.width = cn.offsetWidth;
		    h = c.height = cn.offsetHeight;
		    stop = false;
			ready();
			pretty();
	    }, 500);
	});
};
