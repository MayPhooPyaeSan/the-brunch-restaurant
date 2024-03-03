import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

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
                <h4 style={{ color: "#f46000" }}>Biscuit Egg-in-a-Hole</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $9
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
                  A savory twist on a classic breakfast dish, featuring a
                  buttery biscuit with a perfectly cooked egg in the center.
                  Served with a side of crispy bacon or sausage.
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
                <h4 style={{ color: "#f46000" }}>Cheese Danish</h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>
                  $5
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
                  A flaky pastry filled with a sweet and creamy cheese filling,
                  topped with a drizzle of icing. The perfect combination of
                  buttery pastry and rich cheese flavor.
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
                  Speedy Steak and Blackberry Salad
                </h4>
                <h4 style={{ marginLeft: "50px", color: "#f46000" }}>$20</h4>{" "}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#573d32",
                    fontWeight: "500",
                  }}
                >
                  Tender slices of steak served on a bed of mixed greens with
                  fresh blackberries, crumbled feta cheese, and a balsamic
                  glaze. A delightful combination of savory and sweet flavors.
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
                <h4 style={{ color: "#f46000" }}>Swiss Chard Mac and Cheese</h4>
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
                  Creamy macaroni and cheese made with Swiss chard for added
                  nutrition and flavor. A comforting and satisfying dish that's
                  perfect for mac and cheese lovers.
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
      </div>
    </div>
  );
};

export default Menus;
