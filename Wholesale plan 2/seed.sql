
-- 0. Categories Table
CREATE TABLE Categories (
    id INT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO Categories (id, name) VALUES
(1, 'Electronics'),
(2, 'Apparel'),
(3, 'Kitchen'),
(4, 'Stationery');

-- 1. Products Table
CREATE TABLE Products (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Categories(id) ON DELETE CASCADE
);

INSERT INTO Products (id, name, category_id, price, stock) VALUES
(1, 'Wireless Mouse', 1, 499.99, 120),
(2, 'Bluetooth Headphones', 1, 1299.50, 60),
(3, 'Cotton T-Shirt', 2, 349.00, 200),
(4, 'Coffee Mug', 3, 199.99, 80),
(5, 'Notebook', 4, 99.00, 150);

-- 2. Users Table
CREATE TABLE Users (
    id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Users (id, username, email, password) VALUES
(1, 'rajkumar99', 'rajesh@example.com', '$2b$12$abcd1234hashedpassword'),
(2, 'aisha_23', 'aisha@example.com', '$2b$12$efgh5678hashedpassword'),
(3, 'johnnyD', 'john@example.com', '$2b$12$ijkl9101hashedpassword');

-- 3. Orders Table
CREATE TABLE Orders (
    id INT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    order_date DATETIME NOT NULL,
    status VARCHAR(50) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE SET NULL
);

INSERT INTO Orders (id, customer_name, order_date, status, total_amount, user_id) VALUES
(1, 'Rajesh Kumar', '2025-04-08 14:23:00', 'Shipped', 1698.50, 1),
(2, 'Aisha Singh', '2025-04-09 09:10:00', 'Delivered', 448.99, 2),
(3, 'John Dsouza', '2025-04-10 11:15:00', 'Pending', 898.99, 3);

-- 4. Order Items Table
CREATE TABLE OrderItems (
    id INT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

INSERT INTO OrderItems (id, order_id, product_id, quantity, price) VALUES
(1, 1, 1, 1, 499.99),
(2, 1, 2, 1, 1299.50),
(3, 2, 3, 1, 349.00),
(4, 2, 4, 1, 199.99),
(5, 3, 5, 2, 198.00),
(6, 3, 2, 1, 1299.50);

-- 5. Cart Table
CREATE TABLE Cart (
    id INT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

INSERT INTO Cart (id, user_id, product_id, quantity) VALUES
(1, 1, 3, 2),
(2, 2, 1, 1),
(3, 3, 4, 3);

-- 6. Product Reviews Table
CREATE TABLE ProductReviews (
    id INT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

INSERT INTO ProductReviews (id, user_id, product_id, rating, comment) VALUES
(1, 1, 1, 5, 'Great mouse, works perfectly!'),
(2, 2, 2, 4, 'Nice sound quality but a bit bulky.'),
(3, 3, 3, 3, 'Good quality but size was off.');

-- 7. Shipping Address Table
CREATE TABLE ShippingAddresses (
    id INT PRIMARY KEY,
    user_id INT NOT NULL,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO ShippingAddresses (id, user_id, address_line1, address_line2, city, state, zip_code, country) VALUES
(1, 1, '123 MG Road', 'Apt 101', 'Mumbai', 'Maharashtra', '400001', 'India'),
(2, 2, '456 Residency Road', NULL, 'Bangalore', 'Karnataka', '560001', 'India'),
(3, 3, '789 Park Street', 'Floor 2', 'Kolkata', 'West Bengal', '700016', 'India');

-- Indexes
CREATE INDEX idx_product_category ON Products(category_id);
CREATE INDEX idx_orders_user_id ON Orders(user_id);
CREATE INDEX idx_reviews_product_id ON ProductReviews(product_id);
CREATE INDEX idx_cart_user_id ON Cart(user_id);

-- Additional Product Entries

INSERT INTO Products (id, name, category_id, price, stock) VALUES
(6, 'USB-C Charger', 1, 799.00, 100),
(7, 'Graphic T-Shirt', 2, 399.00, 180),
(8, 'Ceramic Plate Set', 3, 999.00, 50),
(9, 'Gel Pen Pack', 4, 59.00, 300),
(10, 'Wireless Keyboard', 1, 999.99, 75),
(11, 'Denim Jeans', 2, 899.00, 90),
(12, 'Glass Water Bottle', 3, 249.00, 110),
(13, 'Highlighter Set', 4, 129.00, 220),
(14, 'Portable Speaker', 1, 1499.00, 40),
(15, 'Hoodie Sweatshirt', 2, 749.00, 70);
