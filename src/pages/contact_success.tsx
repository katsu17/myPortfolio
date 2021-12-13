import React from 'react'

const ContactSuccessPage: React.FC = () => (
  <div className="w-4/5 text-center transform -translate-y-1/2 absolute top-1/2 left-1/2 -translate-x-1/2">
    <h2 className="font-serifJp">お問い合わせありがとうございます。</h2>
    <h2 className="font-serifJp">送信が完了致しました。</h2>
    <h2 className="font-serifJp m-4">返信までしばらくお待ちください</h2>
    <a href="./" className="bg-button shadow-md p-3 m-4 font-serifJp">
      Top page へ戻る
    </a>
  </div>
)

export default ContactSuccessPage
