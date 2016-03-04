{{#if hasnext}}
    {{#ifdengyu pagingtype 1}}
        <ul href="#" class="list-group-item pager"  id="detailPaging">
            <li class="previous {{#ifdengyu currentpage 1}}disabled{{/ifdengyu}}" id="pageUp"><a tap="{{pageup}}">上一页</a></li>'
            <li class="next {{#if hasnext}}{{else}}disabled{{/if}}" id="pageDown"><a tap="{{pagenext}}">下一页</a></li>'
        </ul>
    {{else}}
        <div tap="{{pagemore}}">显示更多</div>
    {{/ifdengyu}}
{{/if}}



pager += '<ul id="detailPaging">';
pager += '<li class="previous {{#ifdengyu currentpage 1}}disabled{{/ifdengyu}}" id="pageUp">
<a tap="{{pageup}}">上一页</a></li>';
pager += '<li class="next {{#if hasnext}}{{else}}disabled{{/if}}" id="pageDown"><a tap="{{pagenext}}">下一页</a></li>';
pager += '</ul>';

<div class="ub ub-f1 uinn">
    <div class="ub ub-f1 ub-ac">
        <div class="btn ub ub-f1 ub-ac bc-text-head-black ub-pc bc-btn-white uc-a1 umar-r">上一页</div>
        <div class="btn ub ub-f1 ub-ac bc-text-head-black ub-pc bc-btn-white uc-a1">下一页</div>
    </div>
</div>