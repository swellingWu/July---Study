use rand::Rng;
use std::cmp::Ordering;
use std::io;
fn main() {
    println!("进行一个猜数游戏: 输入你&猜测的值,我们将比较大小");
    let secret_number = rand::thread_rng().gen_range(1..3);

    loop {
        let mut guess = String::new();

        io::stdin().read_line(&mut guess).expect("没有获得数据");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("生成的随机数为 {}", secret_number);

        println!("请输入你猜测的数字");
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("正确的");
                break;
            }
        }
    }
}
