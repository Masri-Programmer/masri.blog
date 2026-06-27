---
title: "Documentation | IndexNow.org"
source: "https://www.indexnow.org/documentation"
author:
published:
created: 2025-04-13
description: "Technical and implementation documenation for indexnow. Detailed information for webmasters/website owners on how to use IndexNow protocol. Get information from submitting one URL or set of URLs to the search engines to verifying the ownership of the website with examples."
tags:
  - "clippings"
---
## Submitting One URL

---

To submit a URL using an HTTP request (replace with the URL provided by the search engine), issue your request to the following URL:

```
https://<searchengine>/indexnow?url=url-changed&key=your-key
```
- url-changed is a URL of your website which has been added, updated, or deleted. URL must be URL-escaped and encoded and please make sure that your URLs follow the [RFC-3986](https://www.ietf.org/rfc/rfc3986.txt) standard for URIs.
- Your-key should have a minimum of 8 and a maximum of 128 hexadecimal characters. The key can contain only the following characters: lowercase characters (a-z), uppercase characters (A-Z), numbers (0-9), and dashes (-).

For example, if you want to notify search engines that [https://www.example.com/product.html](https://www.example.com/product.html) has been updated, and you want to use this key 03ac9a7c09544ac49f9f5a993d61c6d7

```
https://<searchengine>/indexnow?url=https://www.example.com/product.html&key=03ac9a7c09544ac49f9f5a993d61c6d7
```

You can issue the HTTP request using your browser, wget, curl, or any other mechanism of your choosing. A successful request will return an HTTP 200 response code; if you receive a different response, verify that you don’t submit too often, that the key and URL are valid and resubmit the request. The HTTP 200 response code only indicates that the search engine has received your URL.

## Submitting set of URLs

---

To submit a set of URLs using an HTTP request issue your POST JSON request to the URL provided by Search Engines. Replace by the host name of the search engine.

```
POST /indexnow HTTP/1.1
                Content-Type: application/json; charset=utf-8
                Host: <searchengine>
                {
                  "host": "www.example.com",
                  "key": "03ac9a7c09544ac49f9f5a993d61c6d7",
                  "urlList": [
                      "https://www.example.com/url1",
                      "https://www.example.com/folder/url2",
                      "https://www.example.com/url3"
                      ]
                }
```

You can submit up to 10,000 URLs per post, mixing http and https URLs if needed.

You can issue the HTTP request using wget, curl, or another mechanism of your choosing. A successful request will return an HTTP 200 response code; if you receive a different response, you should verify your request and if everything looks fine, resubmit your request. The HTTP 200 response code only indicates that the search engine has received your set of URLs.

The recommended way is to automate submission of URLs as soon as the content is added, updated, or deleted up to some limit; see best practices for user generated content in the Frequently Asked Questions.

## Verifying ownership via the key

---

To submit URLs, you must "prove" ownership of the host for which URLs are being submitted by hosting at least one text file within the host. Once you submit your URLs to search engines, search engines will crawl the key file to verify ownership and use the key until you change the key. Only you and the search engines should know the key and your file key location.

We offer two ways to verify ownership.

Option 1

**Hosting a text key file at the root directory of your host.**

You must host a UTF-8 encoded text key file {your-key}.txt listing the key in the file at the root directory of your website.

For instance for the previous examples, you will need to host your UTF-8 key file at [https://www.example.com/ 03ac9a7c09544ac49f9f5a993d61c6d7.txt](https://www.example.org/03ac9a7c09544ac49f9f5a993d61c6d7.txt) and this file must contain the key **03ac9a7c09544ac49f9f5a993d61c6d7**

Option 2

**Hosting a text key file within your host.**

You can also host one to many UTF-8 encoded text key files in other locations within the same host and you must tell search engines the location of this text key file in each IndexNow notification by specifying the location using the keyLocation variable.

If you submit an URL, specify the key file location as keyLocation URLs parameter value.

```
https://<searchengine>/indexnow?url=http://www.example.com/product.html&key=03ac9a7c09544ac49f9f5a993d61c6d7&keyLocation=http://www.example.com/myIndexNowKey63638.txt
```

If you submit a set of URLs, specify the key file location as keyLocation variable in the JSON content.

```
POST /indexnow HTTP/1.1
                    Content-Type: application/json; charset=utf-8
                    Host: <searchengine>
                    {
                      "host": "www.example.com",
                      "key": "03ac9a7c09544ac49f9f5a993d61c6d7",
                      "keyLocation": "https://www.example.com/myIndexNowKey63638.txt",
                      "urlList": [
                          "https://www.example.com/url1",
                          "https://www.example.com/folder/url2",
                          "https://www.example.com/url3"
                          ]
                    }
```

In this option 2, the location of a key file determines the set of URLs that can be included with this key. A key file located at [http://example.com/catalog/key12457EDd.txt](http://example.com/catalog/key12457EDd.txt) can include any URLs starting with [http://example.com/catalog/](http://example.com/catalog/) but cannot include URLs starting with [http://example.com/help/](http://example.com/help/).

URLs considered valid in http://example.com/catalog/ include:

- [http://example.com/catalog/show?item=23](http://example.com/catalog/show?item=23)
- [http://example.com/catalog/show?item=233&user=3453](http://example.com/catalog/show?item=233&user=3453)

URLs not considered valid in http://example.com/catalog/ include:

- [http://example.com/image/show?item=23](http://example.com/image/show?item=23)
- [http://example.com/image/show?item=233&user=3453](http://example.com/image/show?item=233&user=3453)

URLs that are not considered valid in option 2 may not be considered for indexing. It is strongly recommended that you use Option 1 and place your file key at the root directory of your web server.

---