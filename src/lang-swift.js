// Copyright (C) 2015 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * Registers a language handler for Swift
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-swift">(my swift code)</pre>
 * This file supports the following language extensions:
 *     lang-swift - Swift
 *
 * I used https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/AboutTheLanguageReference.html
 * as the basis for this. In particular, I targeted the revision from
 * 2015-04-08. Swift is still evolving, and this was the latest version 
 * available at the time. I will keep the code unoptimized to ease changes that come with new Swift standards.
 *
 * @author cerech@google.com
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
          //whitespace
          [PR['PR_PLAIN'],                /^[ \n\r\t\v\f\0]+/, null, ' \n\r\t\v\f\0'],
          //string literals
          [PR['PR_STRING'],               /^"(?:[^"\\]|(?:\\.)|(?:\\\((?:[^"\\)]|\\.)*\)))*"/, null, '"'],
        ],
        [
          //floating point literals
          [PR['PR_LITERAL'],              /^(?:(?:0x[\da-fA-F][\da-fA-F_]*\.[\da-fA-F][\da-fA-F_]*[pP]?)|(?:\d[\d_]*\.\d[\d_]*[eE]?))[+-]?\d[\d_]*/, null],
          //integer literals
          [PR['PR_LITERAL'],              /^-?(?:(?:0(?:(?:b[01][01_]*)|(?:o[0-7][0-7_]*)|(?:x[\da-fA-F][\da-fA-F_]*)))|(?:\d[\d_]*))/, null],
          //some other literals
          [PR['PR_LITERAL'],              /^(?:true|false|nil)\b/, null],
          //keywords
          [PR['PR_KEYWORD'],              /^\b(?:__COLUMN__|__FILE__|__FUNCTION__|__LINE__|associativity|as|break|case|class|continue|convenience|default|deinit|didSet|do|dynamic|dynamicType|enum|fallthrough|final|for|func|get|import|infix|init|inout|internal|in|is|lazy|left|let|mutating|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|Protocol|public|required|return|right|safe|self|set|static|struct|subscript|super|switch|Type|typealias|unowned|unsafe|var|weak|while|willSet)\b/, null],
          //double slash comments
          [PR['PR_COMMENT'],              /^\/\/.*?[\n\r]/, null],
          //slash star comments
          [PR['PR_COMMENT'],              /^\/\*[\s\S]*?(?:\*\/|$)/, null],
          //punctuation
          [PR['PR_PUNCTUATION'],          /^<<=|<=|<<|>>=|>=|>>|===|==|\.\.\.|&&=|\.\.<|!==|!=|&=|~=|~|\(|\)|\[|\]|{|}|@|#|;|\.|,|:|\|\|=|\?\?|\|\||&&|&\*|&\+|&-|&=|\+=|-=|\/=|\*=|\^=|%=|\|=|->|`|==|\+\+|--|\/|\+|!|\*|%|<|>|&|\||\^|\?|=|-|_/, null],
          [PR['PR_TYPE'],                 /^\b(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null]   //borrowing the type regex given by the main program for C-family languages
        ]),
    ['swift']); 
