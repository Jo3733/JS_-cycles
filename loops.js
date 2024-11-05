let n = parseInt(prompt('Какую задачу вы хотите проверить? (1-8)'))
switch (n) {
	case 1:
		let str1 = '********'
		for (let i = 1; i < 5; i++) {
			console.log(i + '. ' + str1)
		}
		break

	case 2:
		let str2 = '*'
		for (let i = 1; i <= 5; i++) {
			console.log(str2.repeat(i))
		}
		break

	case 3:
		let num3 = '1'
		for (let i = 1; i <= 5; i++) {
			if (i == 1) {
				continue
			}
			console.log(num3)
			num3 += i
		}
		break

	case 4:
		for (let i = 1001; i <= 1025; i += 3) {
			console.log(i)
		}
		break

	case 5:
		let begin5 = prompt('Введите начало: ')
		let end5 = prompt('Введите конец: ')
		let result5 = ''
		let sum5 = 0

		if (begin5.trim() === '' || end5.trim() === '') {
			console.log('Вы ввели пустую строку!')
		} else if (!isNaN(begin5) && !isNaN(end5)) {
			begin5 = parseInt(begin5)
			end5 = parseInt(end5)
			if (end5 < begin5) {
				;[begin5, end5] = [end5, begin5]
			}

			console.log(`Вы ввели ${begin5} и ${end5}`)
			for (let i = begin5; i <= end5; i++) {
				if (i % 2 !== 0) {
					result5 += i + ' '
					sum5 += i
				}
			}
			console.log(result5)
			console.log(`Сумма нечетных чисел: ${sum5}`)
		} else {
			console.log('Вы ввели неправильные данные!')
		}
		break

	case 6:
		let result6 = ''
		for (let i = 500; i <= 1800; i++) {
			if (i % 5 === 0 && i % 7 === 0) {
				result6 += i + ' '
			}
		}
		console.log(`Ряд чисел, которые делятся на 5 и 7: ${result6}`)
		break

	case 7:
		for (let i = 1; i <= 50; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				console.log('FizzBuzz')
			} else if (i % 3 === 0) {
				console.log('Fizz')
			} else if (i % 5 === 0) {
				console.log('Buzz')
			} else {
				console.log(i)
			}
		}
		break

	case 8:
		let sum8 = 0
		let comp8 = 1
		let num8 = parseInt(prompt('Какой пункт задачи хотите проверить? (1-3)'))
		switch (num8) {
			case 1:
			case 2:
				for (let i = 10; i <= 20; i += 2) {
					console.log(i)
					sum8 += i
					comp8 *= i
				}
				console.log(`Сумма чисел: ${sum8}, произведение чисел: ${comp8}.`)
				break

			case 3:
				for (let i = 10; i <= 20; i++) {
					console.log(i)
					if (i === 15) break
				}
				break

			default:
				console.log('Такого пункта нет!')
		}
		break

	default:
		console.log('Такой задачи не существует!')
}
