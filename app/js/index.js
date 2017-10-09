import 'babel-polyfill';
class Test{
    constructor(){
        this.a = 'hello world'
    }
}

let test = new Test();

document.body.innerHTML = test.a;

let draw = function(count){
    console.log(`剩余${count}次`)
  }
  
  let residue = function*(count){
    while (count > 0){
      count --;
      yield draw(count);
    }
  }
  
  let star = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent = '抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', function(){
    star.next();
  },false);

  let ajax = function* (){
    yield new Promise(function(resolve, reject){
      setTimeout(function() {
        resolve({code: 1})
      }, 200)
    })
  }

  let pull = function(){
    let generator = ajax();
    let step = generator.next();
    step.value.then(function(d){
      if (d.code != 0){
        setTimeout(function(){
          console.log('wait');
        //   pull();
        },1000)
      }else{
        console.log(d)
      }
    })
  }

  pull();