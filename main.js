const checkin= async (url,cookie) => {
  if (!cookie) return
  try {
    const headers = {
      'cookie': cookie,
      'content-type': "text/html; charset=utf-8",
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
    }
    await fetch(url+"/attendance.php", {
      method: 'GET',
      headers,
    }).then((r) => r.json())
    return [
      'Checkin OK'
    ]
  } catch (error) {
    return [
      'Checkin Error',
      `${error}`,
    ]
  }
}


const main = async () => {
  const cookie1 = process.env.COOKIE_1
  const url1 = process.env.URL_1
  await checkin(url1,cookie1)

  console.log("COMPLETE_1")
  const cookie2 = process.env.COOKIE_2
  const url2 = process.env.URL_2
  await checkin(url2,cookie2)

  console.log("COMPLETE_2")

  const cookie3 = process.env.COOKIE_3
  const url3 = process.env.URL_3
  await checkin(url3,cookie3)

  console.log("COMPLETE_3")

  const cookie4 = process.env.COOKIE_4
  const url4 = process.env.URL_4
  await checkin(url4,cookie4)
  console.log("COMPLETE_4")
}

main()
