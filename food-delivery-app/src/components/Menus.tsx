import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Footer from "./Footer";

const Menus = () => {
  return (
    <div>
      <div className="menu-nav-container">
        <div>
          <a href="/" style={{ textDecoration: "none", color: "#573d32" }}>
            <h1>Us To You</h1>
          </a>
        </div>
        <div>
          <a href="http://">
            <FaFacebookSquare fontSize={30} color="#573d32" />
          </a>

          <a href="http://">
            <FaInstagramSquare fontSize={30} color="#573d32" />
          </a>
          <a href="http://">
            <FaSquareXTwitter fontSize={30} color="#573d32" />
          </a>
        </div>
      </div>
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "1rem",
            color: "#573d32",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Breakfast
        </h1>
        <div style={{ marginTop: "1rem", padding: "20px" }}>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>
                  Blueberry Coffee Cake Muffins
                </h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>$16</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A delightful blend of blueberries and coffee cake, perfect for
                  a morning treat or afternoon snack.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px", color: "#f46000" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Papeta par Eda</h4>
                <h4 style={{ marginLeft: "50px" }}>$16</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A traditional Parsi dish featuring potatoes and eggs, seasoned
                  to perfection and full of flavor.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Pancake Bread</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $12
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A delightful twist on classic pancakes, this sweet bread is
                  perfect for breakfast or dessert, topped with maple syrup and
                  fresh berries.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Avocado Toasts</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $14
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Crunchy whole wheat toast topped with creamy avocado, fresh
                  tomato, and a sprinkle of sea salt.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Breakfast Bread Pudding</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $10
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A delicious blend of bread, eggs, milk, and spices, baked to
                  perfection and served with a side of maple syrup. Perfect for
                  a cozy breakfast or brunch.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Muffin Tin Baked Eggs</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $8
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Fresh eggs baked in individual muffin tins with a variety of
                  toppings such as cheese, bacon, and vegetables. A delightful
                  and easy-to-eat breakfast option.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Jumbo Maple-Pecan Scone</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $7
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A giant, flaky scone loaded with sweet maple syrup and crunchy
                  pecans. Perfect for those who want a hearty and indulgent
                  breakfast treat.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>
                  Bacon Lattice Breakfast Pie
                </h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>$12</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A savory pie featuring a lattice of crispy bacon on top of a
                  creamy egg and cheese filling. Served with a side of roasted
                  potatoes for a satisfying breakfast experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "1rem",
            color: "#573d32",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Lunch
        </h1>
        <div style={{ marginTop: "1rem", padding: "20px" }}>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Zesty Chicken Salad</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $12
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A refreshing salad featuring tender chicken breast, mixed
                  greens, cherry tomatoes, cucumbers, and a zesty dressing.
                  Light, flavorful, and perfect for a healthy meal.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px", color: "#f46000" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Quick Nutty Noodles</h4>
                <h4 style={{ marginLeft: "50px" }}>$10</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A traditional Parsi dish featuring potatoes and eggs, seasoned
                  to perfection and full of flavor.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>
                  Japanese-Style Shrimp Salad
                </h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>$14</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A light and refreshing salad featuring succulent shrimp, mixed
                  greens, avocado, cucumber, and radish, dressed in a tangy soy
                  and sesame dressing. A perfect balance of flavors and
                  textures.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Summery Corn Soup</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $8
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A comforting soup made with fresh summer corn, potatoes,
                  onions, and a hint of cream. Warm and satisfying, perfect for
                  cooler evenings or as a light meal.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Spicy Crab Tostadas</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $18
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Crunchy tostadas topped with spicy crab salad, avocado,
                  radishes, and a drizzle of chipotle mayo. A flavorful and
                  satisfying dish with a kick.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>
                  Rice Bowl with Chipotle Black Beans
                </h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>$12</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A hearty bowl of rice topped with seasoned chipotle black
                  beans, grilled vegetables, avocado, and a sprinkle of cheese.
                  A delicious and nutritious meal option.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>
                  One-Pot Bacon Cheeseburger Pasta
                </h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>$18</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A hearty and flavorful pasta dish featuring ground beef,
                  crispy bacon, cheddar cheese, and pasta shells, all cooked
                  together in one pot for easy cleanup. A delicious twist on a
                  classic cheeseburger.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Garlic Spaghetti</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $12
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Simple yet delicious, this dish features spaghetti pasta
                  tossed in a garlic-infused olive oil sauce, topped with grated
                  Parmesan cheese and fresh parsley. A classic Italian dish
                  that's sure to satisfy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "1rem",
            color: "#573d32",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Dinner
        </h1>
        <div style={{ marginTop: "1rem", padding: "20px" }}>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Pot Roast Crockpot</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $20
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Tender and juicy pot roast slow-cooked in a crockpot with
                  carrots, potatoes, and onions, seasoned to perfection. A
                  comforting and hearty meal that's perfect for a cozy night in.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px", color: "#f46000" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Alfredo</h4>
                <h4 style={{ marginLeft: "50px" }}>$14</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A classic Italian pasta dish featuring fettuccine noodles
                  tossed in a creamy Alfredo sauce made with butter, cream, and
                  Parmesan cheese. Rich, creamy, and indulgent, perfect for
                  pasta lovers.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Smothered Chicken</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $18
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Tender chicken breasts smothered in a savory gravy with
                  mushrooms and onions. Served with mashed potatoes and your
                  choice of side, this dish is comfort food at its finest.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Manicotti</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $16
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Delicious manicotti pasta tubes filled with a creamy ricotta
                  cheese mixture, topped with marinara sauce and melted
                  mozzarella cheese. Served with garlic bread, this Italian
                  classic is sure to satisfy.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Dumpling Soup</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $14
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A comforting and hearty soup filled with plump dumplings,
                  vegetables, and savory broth. Perfect for a chilly day or
                  whenever you need a warm and satisfying meal.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Baked Salmon</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $22
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Flaky, tender salmon fillet baked to perfection with a
                  flavorful seasoning blend. Served with your choice of sides,
                  this dish is a healthy and delicious option for seafood
                  lovers.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Sun-Dried Tomato Pasta</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $16
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A flavorful pasta dish featuring al dente noodles tossed in a
                  rich sun-dried tomato sauce. The sauce is made with sun-dried
                  tomatoes, garlic, olive oil, and herbs, creating a savory and
                  satisfying meal.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>One-Pot Lemon Pasta</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $14
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A quick and easy pasta dish that is cooked in one pot for
                  minimal cleanup. This dish features spaghetti cooked in a
                  lemony broth with garlic, Parmesan cheese, and fresh herbs,
                  creating a light and refreshing meal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "1rem",
            color: "#573d32",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Drinks
        </h1>
        <div style={{ marginTop: "1rem", padding: "20px" }}>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Oreo Chocolate</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $8.99
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Indulge in the rich and creamy goodness of our Oreo Chocolate
                  dessert. Made with layers of Oreo cookies and velvety
                  chocolate, it's a delightful treat for any chocolate lover.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px", color: "#f46000" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Peach Smoothie</h4>
                <h4 style={{ marginLeft: "50px" }}>$5.99</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Enjoy the refreshing taste of summer with our Peach Smoothie.
                  Made with ripe, juicy peaches blended to perfection, it's a
                  cool and satisfying drink for any time of day.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>SGreen Tea Frappuccino</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $6.99
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A creamy and icy blend of green tea, milk, and ice, topped
                  with whipped cream for a refreshing pick-me-up.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Mint Mojito</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $4.99
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A refreshing blend of mint leaves, lime juice, sugar, and soda
                  water, perfect for cooling off on a hot day.
                </p>
              </div>
            </div>
          </div>
          <div className="menu-container1">
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Berry Blast Smoothie</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $5.99
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A mix of strawberries, blueberries, raspberries, and yogurt,
                  blended into a fruity and creamy drink.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <h4 style={{ color: "#f46000" }}>Mango Lassi</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $4.99
                </h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  A traditional Indian drink made with mangoes, yogurt, and a
                  touch of cardamom, offering a sweet and tangy flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menus;
