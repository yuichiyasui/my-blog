# my-blog

私の趣味ブログの静的サイト。

## 技術スタック

- Next.js
- MDX
- Storybook
- TailwindCSS

## 環境構築

1. asdf をインストールする http://asdf-vm.com/guide/getting-started.html
2. `.tool-versions` で指定されたバージョンの Node.js をインストールする

```
asdf install
```

## 運用手順

### 記事作成時

#### フロー

1. develop ブランチから記事作成ブランチを切る(add-article/{記事 ID})
2. develop ブランチに対して PR を上げる
3. develop ブランチにマージ後 develop ブランチを main ブランチに PR を上げてマージすると Vercel にデプロイされる

- 記事作成時は release タグは切らない
- 記事の MDX ファイルは`src/articles/`に`{記事ID}.mdx`で格納する
- 記事内で使用する画像については`public/articles/{記事ID}/`に格納する
  - `main.jpg` : 記事のメインビジュアル兼 OGP 画像

### 機能改修時（記事作成以外の場合）

- 手順は記事作成時と同じ
- タスクは Projects のカンバンに起票しておく
- 作業ブランチ名は任意で命名する(feat/xxx, fix/xxx, chore/xxx, refactor/xxx など)
- リリース時は release タグを切り、差分の概要をまとめる
