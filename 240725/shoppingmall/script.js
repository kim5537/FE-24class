const productInfo = "./products.json";
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
        //1.data 우리가 명한 함수명. 2번 data 가지고있는 객체
        //아이디값을 생성하여 추가함 ==> 때문에 뒤에 소괄호가 있다.
        //...item인 이유 : ...이 없으면 추가한 데이터만 남기고 다 날린다. 때문에 기존 값을 유지하고 추가하기 위해 ...를 넣는다. 중괄호만있으면 함수의 실행문으로만 인식한다. 때문에 소괄호를 넣어 이러한 형태의 모습으로 만들어달라는 의미이다.
      })),
    };
    //Removing Items
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    //making items
    const createItem = (product) => {
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      h3.className = "name";
      h3.innerText = product.name;

      span.className = "price";
      span.innerText = price;

      attr.value = product.img;
      img.setAttributeNode(attr);
      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);
    };

    //import items
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
        //값을 찾아와서 createItem안에 전달해달라.
      });
    };

    importData();

    // newest
    const newlisting = document.querySelector(".Newlisting");

    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newlisting.addEventListener("click", sortNew);

    // Ascending
    const asceButton = document.querySelector(".ascending");

    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    asceButton.addEventListener("click", sortAsce);

    // Descending
    const descButton = document.querySelector(".decending");

    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    descButton.addEventListener("click", sortDesc);

    // Search
    const searchBar = document.querySelector(".searchBar");

    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase();
      if (keyword === "") {
        removeItems();
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });

        removeItems();

        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    //select event
    const select = document.querySelector("select");

    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;

      const filtered = products.data.filter((product) => {
        return product.cartagory === value;
      });

      removeItems();
      filtered.forEach((product) => {
        createItem(product);
      });
    };

    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.log(error);
  });

//스크립트로 불러오기//

// import products from "./products.js";
//프로덕츠 파일에서 데이터를 가져오는데 이를 프로덕츠(전자)라고 부른다

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// const img = document.createElement("img");
// const attr = document.createAttribute("src");
// const div = document.createElement("div");
// const h3 = document.createElement("h3");
// const span = document.createElement("span");

// const price = new Intl.NumberFormat("ko-kr", {
//   style: "currency",
//   currency: "KRW",
// }).format(products.data[0].price);

// h3.className = "name";
// h3.innerText = products.data[0].name;

// span.className = "price";
// span.innerText = products.data[0].price;

// attr.value = products.data[0].img;
// img.setAttributeNode(attr);
// div.append(h3, span);
// // li.appendChild(img);
// // li.appendChild(div);
// li.append(img, div);
// ul.appendChild(li);
