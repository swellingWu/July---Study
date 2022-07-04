// fn main() {
//     let y = {
//         let x = 3;
//         x + 1
//     };

//     println!("The value of y is: {}", y);
// }

fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();
    // let s2 = &s1;

    println!("s1 = {}, s2 = {}", s1, s2);

    let x = 5;
    let y = x;

    println!("x = {}, y = {}", x, y);
}
