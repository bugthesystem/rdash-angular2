use Rack::Static,
  :urls => ["/js", "/css","/fonts","/components","/lib",""],
  :root => "public",
  :index => "index.html",
  :header_rules => [
    [:all, {'Cache-Control' => 'public, max-age=1800'}]
  ]

  run lambda{ |env| [ 404, { 'Content-Type'  => 'text/html' }, ['404 - page not found'] ] }
