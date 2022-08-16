CloudFront経由でアップロード時に必要な設定

・S3
  ・バケットポリシーでs3:PutObjectを追加

・CloudFront
  ・ビヘイビア
  
    ・ビューワー
      ・許可された HTTP メソッド
        GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
        
    ・レスポンスヘッダーポリシー - オプション
      ・CORS-With-Preflight
        ※これは予め用意されている管理ポリシーで、全オリジンからの非同期アクセスを許しているので
          カスタムポリシー作成するなど要検討
      
    ・関数の缶レ付
      ・ビューワーリクエスト
        作成したLambda
